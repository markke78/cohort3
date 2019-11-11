//import { postData } from "./fetch.js";

class City {
  constructor(key, name, latitude, longitude, population) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.population = population;
    this.key = key;
  }

  show() {
    return `${this.name} ${this.latitude} ${this.longitude} ${this.population}`;
  }

  movedIn(num) {
    if (num > 0) this.population += num;
    return this.population;
  }

  movedOut(num) {
    if (num >= this.population) {
      return (this.population = 0);
    } else if (num > 0) {
      this.population -= num;
      return this.population;
    }
  }

  howBig() {
    if (this.population > 100000) {
      return "City";
    } else if (this.population > 20000) {
      return "Large Town";
    } else if (this.population > 1000) {
      return "Town";
    } else if (this.population > 100) {
      return "Village";
    }
    return "Hamlet";
  }

  whichSphere() {
    if (this.latitude > 0) {
      return "Northern Hemipnere";
    } else if (this.latitude < 0) {
      return "Southern Hemisphere";
    } else return "Equator";
  }
  latitude1() {
    return this.latitude;
  }

  longitude1() {
    return this.longitude;
  }
  name1() {
    return this.name;
  }

  population1() {
    return this.population;
  }
}

class Community {
  constructor() {
    this.communityCities = [];
    this.keySeris = 1;
    this.url = "http://localhost:5000/";
  }
  async getDataFromServer() {
    let cities = [];
    await postData(this.url + "all").then(data => {
      for (let b of data) {
        let city = new City(
          b.key,
          b.name,
          b.latitude,
          b.longitude,
          b.population
        );
        cities.push(city);
      }
    });
    return cities;
  }
  createCity(name, latitude, longitude, population) {
    const newCity = new City(
      this.keySeris++,
      name,
      latitude,
      longitude,
      population
    );
    postData(this.url + "add", newCity);
    return newCity;
  }
  //actually, function deleteCity cannot be uesed async, but it need to be tested, so that's why this function does one more getDataFromServer() becasuse it need to get the data from database to check how many cities.
  async deleteCity(name) {
    let cities = [];
    let key = 0;
    await this.getDataFromServer().then(data => {
      for (let b in data) {
        if (data[b].name == name) {
          key = data[b].key;
        }
      }
    });
    await postData(this.url + "delete", { key: key });
    await this.getDataFromServer().then(data => {
      cities = data;
    });
    return cities;
  }

  async getMostNorthern() {
    let result = { name: "", latitude: "" };
    await postData(this.url + "all").then(data => {
      let lat = [];
      for (let b of data) {
        lat.push(b.latitude);
      }
      let heighestValue = Math.max(...lat);
      for (let b of data) {
        if (b.latitude == heighestValue) {
          result = { name: b.name, latitude: b.latitude };
        }
      }
    });
    return result;
  }

  async getMostSouthern() {
    //let balanceNumbers = [];
    let result = ["", 0];
    await postData(this.url + "all").then(data => {
      if (data.length > 1) {
        let b = data.reduce((prev, current) =>
          prev.latitude < current.latitude ? prev : current
        );
        result = { name: b.name, latitude: b.latitude };
      }
    });
    return result;
  }

  async getPopulation() {
    let summary = 0;
    // for (let b of this.communityCities) {
    //   summary += b.population1();
    // }
    await postData(this.url + "all").then(data => {
      for (let b of data) {
        summary += parseFloat(b.population);
      }
    });
    return summary;
  }

  async popOperator(name, amount, inAndOut) {
    let result = 0;
    await postData(this.url + "all").then(data => {
      for (let b of data) {
        if (b.name == name) {
          switch (inAndOut) {
            case "moveIn":
              // b.movedIn(amount);
              b.population += amount;
              break;
            case "moveOut":
              // b.movedOut(amount);
              b.population -= amount;
              break;
          }
          postData(this.url + "update", b);
          result = b.population;
        }
      }
    });
    return result;
  }

  createNewCard(node, counter, newCity) {
    let newDiv = document.createElement("div");
    newDiv.className = "city";
    newDiv.setAttribute("counter", counter);
    newDiv.textContent = `City ${counter}:${newCity.name1()}------Latitude:${newCity.latitude1()}------Longtidue:${newCity.longitude1()}------Population:${newCity.population1()}`;
    let newBtn = document.createElement("button");
    newBtn.className = "remove";
    newBtn.textContent = "Remove";
    newDiv.appendChild(newBtn);
    node.appendChild(newDiv);
    return newDiv;
  }
}
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });

  const json = await response.json(); // parses JSON response into native JavaScript objects
  json.status = response.status;
  json.statusText = response.statusText;
  // console.log(json, typeof(json));
  return json;
}

export { City, Community };

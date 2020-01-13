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
    // if (num >= this.population) {
    //   return (this.population = 0);
    // } else if (num > 0) {
    //   this.population -= num;
    //   return this.population;
    // }
    if (num > 0) {
      this.population -= num;
      if (this.population < 0) this.population = 0;
    }
    return this.population;
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
  }

  createCity(name, key, latitude, longitude, population) {
    if (!key <= 0) this.keySeris = key;
    if (name == "" && latitude == "" && longitude == "" && population == "") {
      throw {
        message: "Please enter your infromation completely!"
      };
    }
    for (let b of this.communityCities) {
      if (
        b.name == name &&
        b.latitude == latitude &&
        b.longitude == longitude
      ) {
        return { result: false, message: "The City is invailed" };
      }
    }
    const newCity = new City(
      this.keySeris++,
      name,
      latitude,
      longitude,
      population
    );
    this.communityCities.push(newCity);
    return { result: true, newCity: newCity };
  }

  deleteCity(key) {
    for (let b in this.communityCities) {
      if (this.communityCities[b].key == key) {
        this.communityCities.splice(this.communityCities[b], 1);
      }
    }
    return this.communityCities;
  }

  getMostNorthern() {
    let lat = [];
    for (let b of this.communityCities) {
      lat.push(b.latitude1());
    }
    let heighestValue = Math.max(...lat);
    for (let b of this.communityCities) {
      if (b.latitude1() == heighestValue) {
        return { name: b.name1(), latitude: b.latitude1() };
      }
    }
  }

  getMostSouthern() {
    if (this.communityCities.length < 1) return ["", 0];
    let b = this.communityCities.reduce((prev, current) =>
      prev.latitude1() < current.latitude1() ? prev : current
    );
    return { name: b.name1(), latitude: b.latitude1() };
  }

  getPopulation() {
    let summary = 0;
    for (let b of this.communityCities) {
      summary += isNaN(parseFloat(b.population1()))
        ? 0
        : parseFloat(b.population1());
    }

    return summary;
  }

  popOperator(name, key, amount, inAndOut) {
    amount = parseFloat(amount);
    if (isNaN(amount)) return null;

    for (let b of this.communityCities) {
      if (b.name == name && b.key == key) {
        b.population = parseFloat(b.population);
        switch (inAndOut) {
          case "moveIn":
            b.movedIn(amount);
            break;
          case "moveOut":
            b.movedOut(amount);
            break;
        }
        return b;
      }
    }
  }

  addCityInInput() {
    let str = "";
    for (let b of this.communityCities) {
      str += `<option value='${b.name1()}' key='${b.key}'> ${b.name1()} ${
        b.key
      }</option>`;
    }
    return str;
  }
}

export { City, Community };

class City {
  constructor(name, latitude, longitude, population) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.population = population;
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
  }
  createCity(name, latitude, longitude, population) {
    const newCity = new City(name, latitude, longitude, population);
    this.communityCities.push(newCity);
    return newCity;
  }

  deleteCity(name) {
    for (let b in this.communityCities) {
      if (this.communityCities[b].name == name) {
        this.communityCities.splice(b, 1);
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
        return [b.name1(), b.latitude1()];
        // return {"type":b.accountType1(),"balance":b.balance1()};
      }
    }
  }

  getMostSouthern() {
    //let balanceNumbers = [];
    if (this.communityCities.length < 1) return ["", 0];
    let b = this.communityCities.reduce((prev, current) =>
      prev.latitude1() < current.latitude1() ? prev : current
    );
    return [b.name1(), b.latitude1()];
  }

  getPopulation() {
    let summary = 0;
    for (let b of this.communityCities) {
      summary += b.population1();
    }
    return summary;
  }
}

export { City, Community };

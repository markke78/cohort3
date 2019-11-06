export class City {
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
}

class Community {}

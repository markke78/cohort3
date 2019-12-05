import React, { Component } from "react";
import "../App.css";
import { Community } from "./functions";
import MigrantDiv from "./MigrantDiv";
class Migrant extends Component {
  state = { country: new Community() };
  creatCity = () => {
    let { country } = this.state;
    let newCity = country.createCity(
      this.cityName.value,
      0,
      this.latitudeNum.value,
      this.longitudeNum.value,
      this.populationNum.value
    );
    if (newCity.result == false) {
      alert(newCity.message);
      return;
    }
    this.setState({ country: country });
  };
  render() {
    let { country } = this.state;
    return (
      <div>
        <div className="card">
          <div className="cardInside">
            <div>
              City Name:
              <input
                type="text"
                ref={input => {
                  this.cityName = input;
                }}
              />
              Latitude:
              <input
                type="number"
                ref={input => {
                  this.latitudeNum = input;
                }}
              />
              Longitude:{" "}
              <input
                type="number"
                ref={input => {
                  this.longitudeNum = input;
                }}
              />
              Population:{" "}
              <input
                type="number"
                ref={input => {
                  this.populationNum = input;
                }}
              />{" "}
              <button className="int" onClick={this.creatCity}>
                Create
              </button>
            </div>
          </div>
          <hr className="hr" />
          <div>
            Total Population: <span id="topop"></span>
            The Most Northern City: <span id="northern"></span>
            The Most Southern City: <span id="southern"></span>
          </div>

          <hr className="hr" />
          <input
            type="number"
            ref={input => {
              this.amount = input;
            }}
          />
          <form>
            <select name="your account" id="citySelect">
              {/* <option>Checking Account</option>
                  <option>Saving Account</option>
                  <option>RRSP</option>
                  <option>TFSA</option> */}
            </select>
          </form>
          <button className="int" id="moveInBtn">
            Move In
          </button>
          <button className="int" id="noveOutBtn">
            Move Out
          </button>
        </div>
        <div id="cityList">
          <h3>City list:</h3>
          {country.communityCities.map((city, index) => {
            return (
              <MigrantDiv
                key={index}
                id={index}
                population={city.population}
                city={city.name}
                longitude={city.longitude}
                latitude={city.latitude}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Migrant;

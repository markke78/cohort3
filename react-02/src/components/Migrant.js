import React, { Component } from "react";
import { City, Community } from "./functions";
class Migrant extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="card">
          <div className="cardInside">
            <td align="right">City Name:</td>
            <td align="left">
              <input type="text" className="int" id="int2" />
            </td>
            <td align="right">Latitude:</td>
            <td align="left">
              <input type="text" className="int" id="int3" />
            </td>
            <td align="right">Longitude:</td>
            <td align="left">
              <input type="text" className="int" id="int4" />
            </td>
            <td align="right">Population:</td>
            <td align="left">
              <input type="text" className="int" id="int5" />
            </td>
            <button className="int" id="creatBtn">
              Create
            </button>
          </div>
          <hr className="hr" />
          <td>
            Total Population: <span id="topop"></span>
          </td>
          <td>
            The Most Northern City: <span id="northern"></span>
          </td>
          <td>
            The Most Southern City: <span id="southern"></span>
          </td>
          <hr className="hr" />
          <input type="text" id="int5" />
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
        </div>
      </div>
    );
  }
}

export default Migrant;

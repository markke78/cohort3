import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext.js";

class Theme extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>Welcome to Word Controller</h2>
        <div className="listContent">
          <br></br>
          <label className="lbllist">
            Select Font Color:
            <select
              value={this.context.fontColor}
              onChange={this.context.setFontColor}
            >
              <option value="Default">Black(Default)</option>
              <option value="purple">Purple</option>
              <option value="blue">Blue</option>
            </select>
          </label>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

export { Theme };

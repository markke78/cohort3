import React, { Component } from "react";
class MigrantDiv extends Component {
  render() {
    return (
      <div
        className={`city ${
          parseFloat(this.props.id) % 2 == 0 ? "even" : "odd"
        }`}
      >
        <h5>
          City:{this.props.city} Latitude:{this.props.latitude}Longtidue:{" "}
          {this.props.longtidue} Population: {this.props.population}
        </h5>
      </div>
    );
  }
}

export default MigrantDiv;

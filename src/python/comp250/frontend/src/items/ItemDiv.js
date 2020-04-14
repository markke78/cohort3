import React from "react";
import "./item.css";

const ItemDiv = (props) => {
  return (
    <div className="inNode">
      <span> Item: {props.name} </span>
      <br />
      <span> Price: {props.price} </span>
      <br />
      <button className="remove" onClick={props.handleRemoveItem}>
        Remove
      </button>
    </div>
  );
};

export default ItemDiv;

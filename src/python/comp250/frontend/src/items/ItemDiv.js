import React, { useRef } from "react";
import "./item.css";

const ItemDiv = (props) => {
  const price = useRef();
  const saveAdjustPrice = () => {
    props.saveChange(props.item.name, price.current.value);
  };
  return (
    <div className="inNode">
      <span> Item: {props.item.name} </span>
      <br />
      {props.item.isEdit ? (
        <span>
          Price <input defaultValue="" ref={price} />
        </span>
      ) : (
        <span> Price: {props.item.price} </span>
      )}

      <br />
      {props.item.isEdit ? (
        <button className="change" onClick={saveAdjustPrice}>
          Save
        </button>
      ) : (
        <button className="change" onClick={props.adjustPrice}>
          Adjust Price
        </button>
      )}

      <button className="remove" onClick={props.handleRemoveItem}>
        Remove
      </button>
    </div>
  );
};

export default ItemDiv;

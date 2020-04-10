import React from "react";

const ItemDiv = (props) => {
  return (
    <div className="inNode">
      <span> Item: {props.name} </span>
      <span> Price: {props.price} </span>
    </div>
  );
};

{
  /* <span>
        <button onClick={props.handleDeleteEvent}> Delete </button>
      </span> */
}
export default ItemDiv;

import React from "react";
const NewNode = props => {
  return (
    <div className="inNode">
      <span> Name: {props.name} </span>
      <span> Age: {props.age} </span>
      <img className="linkPics" src={props.src} />
    </div>
  );
};
export default NewNode;

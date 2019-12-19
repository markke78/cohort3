import React, { useState } from "react";

const List = props => {
  return (
    <div>
      <h1>Linked List</h1>
      <div className="linkList1">
        <h5>Subject Name:</h5>
        <input
          type="text"
          // ref={input => {
          //   this.subjectName = input;
          // }}
        />
        <h5>Number:</h5>
        <input
          type="number"
          // ref={input => {
          //   this.amount = input;
          // }}
        />
        <button
          className="submitLL"
          // onClick={() => this.("")}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default List;

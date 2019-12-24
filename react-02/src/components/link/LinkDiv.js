import React from "react";
const NewNode = props => {
    return (
        <div className="inNode">
            <span> Amount: {props.amount} </span>
            <span> subject: {props.subject} </span>
            {props.isFlag ? (
                <span>
                    <button onClick={props.handleDeleteEvent}> Delete </button>
                    <span className="flag"> Flag </span>
                </span>
            ) : (
                ""
            )}
        </div>
    );
};
export default NewNode;

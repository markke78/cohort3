import React, { Component } from "react";
import Box from "./box";
import O from "./O.png";
import X from "./X.png";
class Tictactoe extends Component {
  constructor() {
    super();
    this.state = {
      boxes: this.initBox()
    };
    this.operator = O;
  }

  initBox = () => {
    let boxes = [];
    for (let i = 0; i < 9; i++) {
      boxes.push({
        key: i,
        content: ""
      });
    }
    return boxes;
  };

  handleBoxClickEvent = (key, content) => {
    if (content !== "") return;
    const { boxes } = this.state;
    for (let index in boxes) {
      if (boxes[index].key === key) {
        boxes[index].content = this.operator;
        this.operator = this.operator === O ? X : O;
        this.setState({ boxes: boxes });
        return;
      }
    }
  };
  render() {
    return (
      <div className="gameArea">
        <img
          className="gamePage"
          src={this.props.src}
          alt={this.props.name}
        ></img>
        <div className="board">
          {this.state.boxes.map(obj => {
            return (
              <Box
                onBoxClick={() => {
                  this.handleBoxClickEvent(obj.key, obj.content);
                }}
                key={obj.key}
                id={obj.key}
                content={obj.content}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tictactoe;

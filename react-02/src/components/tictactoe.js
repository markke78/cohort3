import React, { Component } from "react";
import Box from "./box";
import marioO from "./marioO.png";
import luigiX from "./luigiX.png";
import tictactoebg1 from "./tictactoebg1.png";
class Tictactoe extends Component {
  constructor() {
    super();
    this.state = {
      boxes: this.initBox()
    };
    this.operator = marioO;
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
    if (this.calculateWinner()) {
      return;
    }

    for (let index in boxes) {
      if (boxes[index].key === key) {
        boxes[index].content = this.operator;
        this.operator = this.operator === marioO ? luigiX : marioO;
        this.setState({ boxes: boxes });
        return;
      }
    }
  };

  calculateWinner = () => {
    const { boxes } = this.state;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        boxes[a].content !== "" &&
        boxes[a].content === boxes[b].content &&
        boxes[a].content === boxes[c].content
      ) {
        return boxes[a].content === marioO ? "Mario" : "Luigi";
      }
    }
    return null;
  };
  resetGame = () => {
    this.setState({ boxes: this.initBox() });
    this.operator = marioO;
  };

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.operator === marioO ? "Mario" : "Luigi");
    }
    return (
      <div>
        <div>{status}</div>
        <div className="gameArea">
          <img className="gamePage" src={tictactoebg1} alt="innerBox"></img>
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
      </div>
    );
  }
}

export default Tictactoe;

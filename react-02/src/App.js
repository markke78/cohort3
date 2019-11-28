import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyIcon from "./components/MyIcon";
import icon from "./components/icon.svg";
import star from "./components/star.svg";
import money from "./components/money.svg";
import tictactoe from "./components/tictactoe.svg";
import Tictactoe from "./components/tictactoe";
import ReactAccount from "./components/account";

class App extends React.Component {
  constructor() {
    super();
    this.icons = [
      {
        src: icon,
        name: "Mario",
        heading: "React Starting Page",
        onImageClick: this.resetGame
      },
      {
        src: tictactoe,
        name: "Mario3",
        heading: "React Starting Page",
        onImageClick: this.startGame
      },
      {
        src: star,
        name: "Mario2",
        heading: "React Starting Page",
        onImageClick: this.goBack
      },
      {
        src: money,
        name: "Mario4",
        heading: "React Starting Page",
        onImageClick: this.myAccount
      }
    ];
    this.sences = {
      startPage: (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      ),
      gamePage: (
        <div>
          <Tictactoe />
        </div>
      ),
      accountPage: (
        <div className="accountHead">
          <h1>Welcome to Super Mario Bank</h1>
          <ReactAccount />
        </div>
      )
    };
    this.state = { sences: this.sences.startPage };
  }

  startGame = () => {
    this.setState({ sences: this.sences.gamePage });
  };

  myAccount = () => {
    this.setState({ sences: this.sences.accountPage });
  };

  goBack = () => {
    this.setState({ sences: this.sences.startPage });
  };

  // resetGame = () => {
  //   this.setState({ sences: this.sences.gamePage });
  // };

  render() {
    return (
      <div className="App">
        {this.icons.map(item => (
          <MyIcon
            src={item.src}
            name={item.name}
            key={item.name}
            onImageClick={item.onImageClick}
          />
        ))}
        <header className="App-header">{this.state.sences}</header>
      </div>
    );
  }
}

export default App;

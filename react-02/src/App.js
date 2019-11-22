import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyIcon from "./components/MyIcon";
import icon from "./components/icon.svg";
import star from "./components/star.svg";
import tictactoe from "./components/tictactoe.svg";

class App extends React.Component {
  constructor() {
    super();
    this.icons = [
      { src: icon, name: "Mario", heading: "React Starting Page" },
      { src: tictactoe, name: "Mario3", heading: "React Starting Page" },
      { src: star, name: "Mario2", heading: "React Starting Page" }
    ];
  }

  render() {
    return (
      <div className="App">
        {this.icons.map(item => (
          <MyIcon src={item.src} name={item.name} key={item.name} />
        ))}
        <header className="App-header">
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
        </header>
      </div>
    );
  }
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComp from "./components/myComponent";
import EvenComponent from "./components/EvenComponent";
import OddComponent from "./components/OddComponent";

class App extends React.Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = { myState: "TBD" };
  }

  onPushMe = () => {
    console.log("You pushed me");
    console.log(this.counter++);
    this.setState({ myState: "now:" + this.counter });
  };

  evenOrOdd = () => {
    if (this.counter % 2 === 0) {
      return <EvenComponent />;
    } else return <OddComponent />;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            I am in control of this application and my name is Mark{" "}
            {this.counter}
          </h1>
          {this.state.myState}
          <MyComp whatToSay="what Ever" onPushMe={this.onPushMe} />
          {this.evenOrOdd()}
          <button onClick={this.onPushMe}>Push Me</button>
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

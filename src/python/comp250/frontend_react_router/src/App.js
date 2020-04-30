import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import StartPage from "./component/StartPage";
import ItemList from "./component/ItemList";
import SignUp from "./component/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/item">Item</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul> */}
          <div>
            <Switch>
              <Route exact path="/" component={StartPage} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/item" component={ItemList} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import StartPage from "./StartPage";
import ItemList from "./items/Items";
import SignUp from "./SignUp";

function App() {
  const [sence, setSence] = useState(null);
  useEffect(() => {
    if (sence === null) {
      setSence(
        <StartPage goItemPage={goItemPage} goSignUpPage={goSignUpPage} />
      );
    } else {
      setSence(sence);
    }
  }, [sence]);

  // const goStartPage = (e) => {
  //   setSence(<StartPage />);
  // };

  const goItemPage = (items) => {
    setSence(<ItemList items={items} />);
  };
  const goSignUpPage = (items) => {
    setSence(<SignUp items={items} goItemPage={goItemPage} />);
  };

  return <div className="App">{sence}</div>;
}

export default App;

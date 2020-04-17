import React, { useState, useEffect } from "react";
import "./App.css";
import StartPage from "./StartPage";
import ItemList from "./items/Items";

function App() {
  const [sence, setSence] = useState(null);
  useEffect(() => {
    if (sence === null) {
      setSence(<StartPage goItemPage={goItemPage} />);
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

  return <div className="App">{sence}</div>;
}

export default App;

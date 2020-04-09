import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const url = "http://127.0.0.1:5000/";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  if (response.error) {
    console.log("Error!");
    return;
  }

  const json = await response.json(); // parses JSON response into native JavaScript objects
  json.status = response.status;
  json.statusText = response.statusText;
  // console.log(json, typeof(json));
  return json;
}

const getAccessToken = async (user) => {
  const authUrl = url + "/auth";
  const json = await postData(authUrl, user);
  return json.access_token;
};

function App() {
  const getData = async (e) => {
    // console.log(onSignIn());
    e.preventDefault();
    const token = await getAccessToken(user);
    const data = await fetch(url + "items", {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    const obj = await data.json();
    console.log(obj);
  };

  const [item, setItem] = useState({});
  const [user, setUser] = useState({});
  const [isAuthenticated, setAuthenticated] = useState(false);

  const onChange = (e) => setItem({ ...item, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const postUrl = url + `item/${item.name}`;
    postData(postUrl, { price: item.price }).then((json) => console.log(json));
  };

  const onRenew = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const create_ueser = (e) => {
    e.preventDefault();
    const postUrl = url + "register";
    postData(postUrl, {
      username: user.username,
      password: user.password,
    }).then((json) => console.log(json));
  };

  const onSignIn = async (e) => {
    const authUrl = url + "auth";
    const itemUrl = url + "items";
    const token = await getAccessToken(user);
    // json = {access_token: adksjfkasfkasj ...}
    if (token.error) {
      console.log("Password and username does not match!");
      // console.error(json.error);
      return;
    }
    const data = await fetch(itemUrl, {
      // method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        Authorization: `JWT ${token}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrer: "no-referrer", // no-referrer, *client
    });
    const items = await data.json();
    console.log(items);
    // .then(async (data) => {
    //   const items = await data.json();
    //   console.log(items);
    // });
  };

  return (
    <div className="App">
      <div>
        <button onClick={getData}>Submit</button>
      </div>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={onChange}
          />
        </label>
        <label>
          Price
          <input
            type="text"
            name="price"
            value={item.price}
            onChange={onChange}
          />
        </label>
        <button>Add Item</button>
      </form>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={onRenew}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={onRenew}
          />
        </label>
        <button onClick={create_ueser}>create</button>
        <button onClick={onSignIn}>Sign In</button>
      </form>
      {isAuthenticated && <h2>Authenticated!</h2>}
    </div>
  );
}

export default App;

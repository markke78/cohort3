import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import StartPage from "./StartPage";
import ItemList from "./Items";

// const url = "http://127.0.0.1:5000/";

// async function postData(url = "", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrer: "no-referrer", // no-referrer, *client
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   if (response.error) {
//     console.log("Error!");
//     return;
//   }

//   const json = await response.json(); // parses JSON response into native JavaScript objects
//   json.status = response.status;
//   json.statusText = response.statusText;
//   // console.log(json, typeof(json));
//   return json;
// }

// const getAccessToken = async (user) => {
//   const authUrl = url + "/auth";
//   const json = await postData(authUrl, user);
//   return json.access_token;
// };

function App() {
  const [sence, setSence] = useState(null);

  useEffect(() => {
    if (sence === null) {
      setSence(<StartPage goItemPage={goItemPage} />);
    } else {
      setSence(sence);
    }
  }, [sence]);

  const goStartPage = (e) => {
    setSence(<StartPage />);
  };

  const goItemPage = () => {
    setSence(<ItemList />);
  };

  // const getData = async (e) => {
  //   // console.log(onSignIn());
  //   e.preventDefault();
  //   const token = await getAccessToken(user);
  //   const data = await fetch(url + "items", {
  //     headers: {
  //       Authorization: `JWT ${token}`,
  //     },
  //   });
  //   const obj = await data.json();
  //   console.log(obj);
  // };

  // const [item, setItem] = useState({});
  // const [user, setUser] = useState({});
  // const [isAuthenticated, setAuthenticated] = useState(false);

  // const onChange = (e) => setItem({ ...item, [e.target.name]: e.target.value });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const postUrl = url + `item/${item.name}`;
  //   postData(postUrl, { price: item.price }).then((json) => console.log(json));
  // };

  return (
    <div className="App">
      {sence}
      {/* <div>
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
      {isAuthenticated && <h2>Authenticated!</h2>} */}
    </div>
  );
}

export default App;

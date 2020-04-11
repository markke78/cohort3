import React, { useState } from "react";
const url = "http://127.0.0.1:5000/";
async function postData(
  url = "",
  data = {},
  header = { "Content-Type": "application/json" }
) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: header,
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

const StartPage = (props) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setAuthenticated] = useState(false);
  // const onRenew = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onRenew = (e) => {
    user[e.target.name] = e.target.value;
    setUser(user);
  };

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

    if (token.error) {
      console.log("Password and username does not match!");

      return;
    }
    const data = await fetch(itemUrl, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    const items = await data.json();
    console.log(items);
    props.goItemPage();
  };
  return (
    <div>
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
};

export default StartPage;

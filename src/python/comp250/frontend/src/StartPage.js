import React, { useState } from "react";
import { getAccessToken, addUser, getData } from "./api";

const StartPage = (props) => {
  const [user, setUser] = useState({});
  const onRenew = (e) => {
    user[e.target.name] = e.target.value;
    setUser(user);
  };

  const create_ueser = (e) => {
    e.preventDefault();
    addUser(user.username, user.password);
  };

  const onSignIn = async (e) => {
    const token = await getAccessToken(user);

    if (token.error) {
      console.log("Password and username does not match!");
      return;
    }

    const items = await getData(user);
    console.log(items);
    props.goItemPage(items);
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
    </div>
  );
};

export default StartPage;

import React, { useState } from "react";
import { addUser, getData } from "./api";
import "./App.css";

const StartPage = (props) => {
  const [user, setUser] = useState({});
  const onRenew = (e) => {
    user[e.target.name] = e.target.value;
    setUser(user);
  };

  const onSignIn = async (e) => {
    const items = await getData(user);
    console.log(items);
    props.goItemPage(items);
    console.log(user);
  };

  const goSignUp = (e) => {
    props.goSignUpPage();
  };

  return (
    <div>
      <div className="sign">
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={onRenew}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={user.password}
              onChange={onRenew}
            />
          </label>
          <br />
          <button onClick={onSignIn}>Sign In</button>
        </form>
      </div>
      <br />
      If you have not had account yet, please go to sign up.
      <br />
      <button onClick={goSignUp}>Go To Sign Up</button>
    </div>
  );
};

export default StartPage;

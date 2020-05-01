import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { login } from "./api";

const StartPage = () => {
  const username = useRef(null);
  const password = useRef(null);
  const history = useHistory();
  const onSignIn = async (e) => {
    e.preventDefault();
    const user = {
      username: username.current.value,
      password: password.current.value,
    };
    const token = await login(user);
    console.log(token);
  };

  const goSignUp = (e) => {
    history.push("/signup");
  };
  return (
    <div>
      <div className="sign">
        <form>
          <label>
            Username:
            <input type="text" name="username" ref={username} />
          </label>
          <br />
          <label>
            Password:
            <input type="text" name="password" ref={password} />
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

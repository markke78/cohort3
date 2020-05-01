import React, { useState } from "react";
import { addUser, login } from "./api";
import { useHistory } from "react-router-dom";

const SignUP = () => {
  const [user, setUser] = useState({});
  const history = useHistory();
  const onRenew = (e) => {
    user[e.target.name] = e.target.value;
    setUser(user);
  };
  const create_ueser = async (e) => {
    e.preventDefault();
    await addUser(user.username, user.password);
    const token = await login(user);
    console.log(token);
    if (!token) {
      history.push("/item");
    }
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
      </form>
    </div>
  );
};

export default SignUP;

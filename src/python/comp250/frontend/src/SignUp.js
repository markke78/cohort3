import React, { useState } from "react";
import { addUser, getData } from "./api";

const SignUP = (props) => {
  const [user, setUser] = useState({});
  const onRenew = (e) => {
    user[e.target.name] = e.target.value;
    setUser(user);
  };
  const create_ueser = async (e) => {
    e.preventDefault();
    await addUser(user.username, user.password);
    console.log(user);
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
      </form>
    </div>
  );
};

export default SignUP;

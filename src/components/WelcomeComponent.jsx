import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchLoginUser } from "../api/auth";

const WelcomePage = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    // return the login screen with a register component/redirect for new user registration if clicked
    <div>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            // use loginUser to go to API and pull token if you are already registered user
            const token = await fetchLoginUser(username, password);
            setToken(token);
            localStorage.setItem("token", token);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <h1>Welcome</h1>
        <h2> to Stranger's Things!</h2>
        <input
          type="text"
          value={username}
          placeholder="Username"
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          type="password"
          value={password}
          placeholder="Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button type="submit">Login Existing User</button>
      </form>
      <div className="links">
        <Link to="/register">
          New users, click here to setup your new account!
        </Link>
        <Link to="/guest">Continue as guest</Link>
      </div>
    </div>
  );
};

export default WelcomePage;

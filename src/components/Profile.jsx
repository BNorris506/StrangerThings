import React from "react";
import { Test } from "./Post";
import Nav from "./Nav";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="center-container">
      <div className="profile-nav">
        <Nav></Nav>
      </div>
      <h1>About me</h1>
      <p>
        Let's pretend this is a lot of information about me and how awesome I
        am.
      </p>
      <h2>My Posts</h2>
      <Test />
    </div>
  );
};

export default Profile;

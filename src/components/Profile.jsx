import React from "react";
import { MyPosts } from "./Post";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = ({userPosts, setToken, user}) => {
  const handleLogout = () => {
    // idea is to change the token state / remove it from localStorage
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <div className="center-container">
      <div className="profile-nav">
      <header>
        <h1>Welcome to Stranger's Things, {user.username}!</h1>
        <div className="Nav">
          {/* <Nav></Nav> */}
          <Link to="/home">Home</Link>
          <Link to="/post">Create New Post</Link>
          <Link to="/profile">User Profile</Link>
          <button className="logoutbutton" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </header>
    
      </div>
      <h1>About me</h1>
      <p>
        Let's pretend this is a lot of information about me and how awesome I
        am.
      </p>
      <h2>My Posts</h2>
      {console.log('this is userPosts inside Profile componenent passing as a prop',userPosts)}
      {userPosts.map((singlePost) => {
        return (<MyPosts key={singlePost.id} singlePost={singlePost}/>);
      })}
      
    </div>
  );
};

export default Profile;

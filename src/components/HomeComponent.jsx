import React from "react";
import PostsComponent from "./PostsComponent";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const HomeComponent = ({ posts, user, setToken, setPosts }) => {
  const handleLogout = () => {
    // idea is to change the token state / remove it from localStorage
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <div>
      <header>
        <h1>Welcome to Stranger's Things, {user.username}!</h1>
        <div className="Nav">
          <Nav></Nav>
          <Link to="/post">NewPost</Link>
          <button className="logoutbutton" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </header>
      <div className="posts">
        <h2>Here are the posts:</h2>
        {/* Map through the posts array created in App.jsx and create a new array of the singlePost */}
        {posts.map((singlePost) => {
          // Run PostsComponent with the following Props and give me that HTML on my page. BooYah.
          return (
            <PostsComponent key={singlePost._id} singlePost={singlePost} />
          );
        })}
      </div>
    </div>
  );
};

export default HomeComponent;

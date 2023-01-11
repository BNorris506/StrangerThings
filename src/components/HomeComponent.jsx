import React, {useState} from "react";
import PostsComponent from "./PostsComponent";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const HomeComponent = ({ posts, user, setToken, setPosts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleLogout = () => {
    // idea is to change the token state / remove it from localStorage
    setToken(null);
    localStorage.removeItem("token");
  };

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
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
      <div className="posts">
        <input
            className="search"
            placeholder="Search for posts by Title"
            value={searchTerm}
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <h2>Here are the posts:</h2>
        {/* Map through the posts array created in App.jsx and create a new array of the singlePost */}
        {filteredPosts.map((singlePost) => {
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

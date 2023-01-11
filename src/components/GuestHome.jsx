import React, {useState} from "react";
import PostsComponent from "./PostsComponent";
import { Link } from "react-router-dom";

const GuestHome = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <header>
        <h1>Welcome to Stranger's Things, Stranger!</h1>
        <div className="Nav">
          <Link to="/register">Register</Link>
          <Link to="/">Log In</Link>
        </div>
      </header>
      <div className="posts">
        <section className="notice-container">
          <h2>Here are the posts:</h2>
          <h3 className="notice">
            If you would like to make a post, please Register above.
          </h3>
        </section>
        <input
            className="search"
            placeholder="Search for posts by Title"
            value={searchTerm}
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
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

export default GuestHome;

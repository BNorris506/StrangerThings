import React, { useState } from "react";
import { createNewPost } from "../api/auth";
import { fetchMe } from "../api/auth";
import { Link } from "react-router-dom";
import { deletePost } from "../api/auth";

export const Post = ({ user, posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleLogout = () => {
    // idea is to change the token state / remove it from localStorage
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <div className="PostPage">
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
      <form
        onSubmit={async () => {
          try {
            // e.preventDefault();
            const newPost = await createNewPost(title, description, price);
            console.log("this is onSubmit Post function", newPost);
            setPosts([newPost, ...posts]);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <h1>New Post</h1>
        <input
          type="text"
          value={title}
          placeholder="Item for sale"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={description}
          placeholder="Description of item"
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={price}
          placeholder="Price"
          required
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <button type="submit">Create New Post</button>
      </form>
    </div>
  );
};

const getMe = async () => {
  const token = window.localStorage.getItem("token");
  const data = await fetchMe(token);
  //Passing the token to the FetchMe functions in auth.js so it can run using that value.
  return data;
};

export const MyPosts = ({ singlePost, posts, setPosts }) => {
  
  const postId = singlePost._id;
  
  return (
    <div className="App">
      <h3>{singlePost.title}</h3>
      <p>{singlePost.description}</p>
      <p>{singlePost.author.username}</p>
      <p>{singlePost.price}</p>
      {/* <button>Delete Post</button> */}
      <button onClick={() => deletePost(posts, setPosts, postId)}>Delete Post</button>
      
    </div>
  );
};


// Delete post by postId
// setPosts to new posts array 
// rerender page with new posts (aka 1 post has been deleted)
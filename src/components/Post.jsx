import React, { useState } from "react";
import { createNewPost } from "../api/auth";
import { fetchMe } from "../api/auth";

export const Post = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
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

export const Test = () => {
  // Only run the getMe function IF a token exists.
  // const data = await getMe();
  // console.log("This is data.posts", data.posts);
  // const posts = data.posts;
  return (
    <div>Let's pretend React didn't wreck me and these are your posts. :D </div>
  );
};

export default createNewPost;

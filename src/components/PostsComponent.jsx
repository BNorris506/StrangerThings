import React from "react";

const PostsComponent = ({ singlePost }) => {
  return (
    <div className="App">
      <h3>{singlePost.title}</h3>
      <p>{singlePost.description}</p>
      <p>{singlePost.author.username}</p>
      <p>{singlePost.price}</p>
    </div>
  );
};

export default PostsComponent;

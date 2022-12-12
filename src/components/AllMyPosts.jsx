import React from "react";

const AllMyPosts = ({ allMyPosts }) => {
  return (
    <div className="App">
      <h3>{allMyPosts.title}</h3>
      <p>{allMyPosts.description}</p>
      <p>{allMyPosts.author.username}</p>
      <p>{allMyPosts.price}</p>
    </div>
  );
};

export default AllMyPosts;

import React, { useState, useEffect } from "react";
import { getPosts } from "../api/auth";

const SearchBar = async ({ setPosts }) => {
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    getPosts(setPosts);
  }, []);
  if (searchInput.length > 0) {
    options.filter((results) => {
      return results.name.match(searchInput);
    });
  }
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={() => {
          setSearchInput(e.target.value);
        }}
        value={searchInput}
      />
    </div>
  );
};

export default SearchBar;

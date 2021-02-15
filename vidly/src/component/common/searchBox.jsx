import React from "react";

const SearchBox = ({ searchQuery, handleSearch }) => {
  return (
    <input
      className="form-control my-3"
      value={searchQuery}
      onChange={(e) => handleSearch(e.currentTarget.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBox;

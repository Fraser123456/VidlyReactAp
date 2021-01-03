import React, { Component } from "react";

const Movie = ({ match, history }) => {
  return (
    <div>
      <h1>Movie - {match.params.Id}</h1>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => history.replace("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default Movie;

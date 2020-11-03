import React, { Component } from "react";
import { getMovies } from "../Starter Code/services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    numberOfMovies: getMovies().length,
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <p>There are currently {this.state.numberOfMovies} movies.</p>
        {this.renderTable()}
      </div>
    );
  }

  deleteMovie = (movie) => {
    console.log(this.movies);
  };

  renderTable = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => {
            return (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.deleteMovie({ movie: movie })}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
}

export default Movies;

import React, { Component } from 'react';
import { getMovies } from '../Starter Code/services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
    numberOfMovies: getMovies().length,
  };

  render() {
    return (
      <div className="container">
        <pv className="m-3">{this.getDisplayText()}</pv>
        {this.renderTable()}
      </div>
    );
  }

  getDisplayText = () => {
    let { numberOfMovies } = this.state;
    return numberOfMovies !== 0
      ? 'There are currently ' + numberOfMovies + ' movies.'
      : 'There are no more movies left!';
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);

    this.setState({
      movies: movies,
    });
    this.setState({
      numberOfMovies: this.state.numberOfMovies - 1,
    });
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
                    onClick={() => this.handleDelete(movie)}
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

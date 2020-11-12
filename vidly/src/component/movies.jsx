import React, { Component } from "react";
import { getMovies } from "../Starter Code/services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies } = this.state;
    const movies = paginate(movies, currentPage, pageSize);

    return (
      <React.Fragment>
        <p className="m-3">{this.getDisplayText()}</p>
        {this.renderTable()}
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }

  getDisplayText = () => {
    const count = this.state.movies.length;
    return count !== 0
      ? "There are currently " + count + " movies."
      : "There are no more movies left!";
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

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
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
                  <Like
                    liked={movie.liked}
                    onToggleClick={() => this.handleLike(movie)}
                  />
                </td>
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

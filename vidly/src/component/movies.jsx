import React, { Component } from "react";
import { getMovies } from "../Starter Code/services/fakeMovieService";
import { getGenres } from "../Starter Code/services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import GenreFilter from "./common/genreFilter";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    currentPage: 1,
    currentFilter: "All Genres",
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      currentFilter,
    } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row col-12 m-3">
          <div className="col-2">
            <GenreFilter
              genres={genres}
              currentFilter={currentFilter}
              onFilterChange={this.handleFilter}
            />
          </div>
          <div className="col">
            <p className="m-3">{this.getDisplayText()}</p>
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
                {movies.map((movie) => {
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
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleFilter = (genre) => {
    this.setState({ currentFilter: genre.name });
    console.log(genre);
  };

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
}

export default Movies;

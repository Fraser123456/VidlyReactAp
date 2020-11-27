import React, { Component } from 'react';
import Like from './common/like';
import Table from './common/table';

class MoviesTable extends Component {
  render() {
    const columns = [
      { path: 'title', lable: 'Title' },
      { path: 'genre.name', lable: 'Genre' },
      { path: 'numberInStock', lable: 'Stock' },
      { path: 'dailyRentalRate', lable: 'Rate' },
      {
        key: 'like',
        content: (movie) => (
          <Like
            liked={movie.liked}
            onToggleClick={() => this.props.onLike(movie)}
          />
        ),
      },
      {
        key: 'delete',
        content: (movie) => (
          <button
            onClick={() => this.props.onDelete(movie)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        ),
      },
    ];

    const { movies, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;

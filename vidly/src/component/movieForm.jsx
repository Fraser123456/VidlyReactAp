import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { getGenres }  from '../Starter Code/services/fakeGenreService';
import { getMovie } from '../Starter Code/services/fakeMovieService';
import { saveMovie } from './../Starter Code/services/fakeMovieService';

class MovieForm extends Form {
  state = {
    data: { title: '', genreId: '', numberInStock: 0, dailyRentalRate: 0 },
    genres: [],
    errors: {},
  };

  componentDidMount(){
    const genres = getGenres();
    this.setState({genres});
    
    const movieId = this.props.match.params.Id;
    if(movieId === "new")
    return;

    const movie = getMovie(movieId);

    if (!movie) return this.props.history.replace("/not-found");

    this.setState({data: this.mapToMovieForm(movie)})
  }

  schema = {
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label('Number In Stock'),
    dailyRentalRate: Joi.number().min(0).max(10).required().label('Daily Rental Rate'),
  };

  doSubmit=()=>{
    saveMovie(this.state.data);

    this.props.history.push("/movies");
  }

  mapToMovieForm(movie){
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    }
  }

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelect('genreId', 'Genre', this.state.genres)}
          {this.renderInput('numberInStock', 'Number In Stock', 'number')}
          {this.renderInput('dailyRentalRate', 'Daily Rental Rate', 'number')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default MovieForm;

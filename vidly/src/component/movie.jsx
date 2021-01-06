import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class Movie extends Form {
  state = {
    data: { title: '', genre: '', numberInStock: 0, rate: 0 },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label('Title'),
    genre: Joi.string().required().label('Genre'),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label('Number In Stock'),
    rate: Joi.number().min(0).max(10).required().label('Rate'),
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderInput('genre', 'Genre', 'dropdown')}
          {this.renderInput('numberInStock', 'Number In Stock', 'number')}
          {this.renderInput('rate', 'Rate', 'number')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default Movie;

// const Movie = ({ match, history }) => {
//   return (
//     <div>
//       <h1>Movie Form</h1>
//       <form onSubmit={this.handleSubmit}>
//         {this.renderInput('username', 'Username')}
//         {this.renderInput('password', 'Password', 'password')}
//         {this.renderInput('name', 'Name')}
//         {this.renderButton('Save')}
//       </form>
//     </div>
//   );
// };

// export default Movie;

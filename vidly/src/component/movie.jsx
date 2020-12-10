import React, { Component } from 'react';

// class Movie extends Component {
//   handleSave = () => {
//     this.props.history.replace('/movies');
//   };

//   render() {
//     return (
//       <div>
//         <h1>Movie - {this.props.match.params.Id}</h1>
//         <button
//           className="btn btn-primary btn-sm m-2"
//           onClick={() => this.handleSave()}
//         >
//           Save
//         </button>
//       </div>
//     );
//   }
// }

const Movie = ({ match, history }) => {
  return (
    <div>
      <h1>Movie - {this.props.match.params.Id}</h1>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => history.replace('/movies')}
      >
        Save
      </button>
    </div>
  );
};

export default Movie;

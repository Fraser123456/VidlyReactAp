import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Movies from './component/movies';
import NavBar from './component/navbar';
import NotFound from './component/notfound';
import Customers from './component/customers';
import Rentals from './component/rentals';
import LoginForm from './component/loginForm';
import RegisterForm from './component/registerForm';
import MovieForm from './component/movieForm';

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/movie/:Id" component={MovieForm} />
          <Route path="/movies/new" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;

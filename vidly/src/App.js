import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Movies from './component/movies';
import NavBar from './component/navbar';
import NotFound from './component/notfound';
import Customers from './component/customers';
import Rentals from './component/rentals';
import Movie from './component/movie';
import LoginForm from './component/loginForm';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/movie/:Id" component={Movie} />
          <Route path="/movies" component={Movies} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;

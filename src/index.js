import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from "./components/Nav";
import MoviesList from "./components/MoviesList";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <MoviesList />
  </React.StrictMode>,
  document.getElementById('root')
);

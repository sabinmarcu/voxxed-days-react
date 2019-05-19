import React from 'react';
import MovieList from './components/MovieList';
import { movies } from './data/movies';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper indigo darken-1">
          <div className="container">
            <span className="brand-logo">Movies App</span>
          </div>
        </div>
      </nav>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

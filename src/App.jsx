import React from 'react';
import Movie from './components/MovieCard';

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
      <div className="row">
        <Movie />
      </div>
    </div>
  );
}

export default App;

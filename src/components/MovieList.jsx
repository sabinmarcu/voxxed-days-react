import React from 'react';
import Movie from './MovieCard';

const MovieList = ({ movies }) => (
  <div className="section">
    {movies.map(movie => (
      <Movie {...movie} />
    ))}
  </div>
);

export default MovieList;

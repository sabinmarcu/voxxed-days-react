import React from 'react';
import { inject, observer } from 'mobx-react';
import Movie from './MovieCard';

const MovieList = inject('Movies')(observer(({ Movies: { movies } }) => (
  <div className="section">
    {movies.map(movie => (
      <Movie key={movie.id} {...movie} />
    ))}
  </div>
)));

export default MovieList;

import React from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import Stores from '../mobx/stores';
import MovieStore from '../mobx/movie';
import MovieForm from '../components/MovieForm';

const makeNewMovie = () => new MovieStore({
  title: '',
  year: 1984,
  genre: '',
  plot: '',
  poster: '',
}, Stores.Movies);

export default observer(({ match, history }) => {
  const movieId = match.params ? parseInt(match.params.id, 10) : -1;
  let movie;
  if (movieId >= 0) {
    const { movies } = useObservable(Stores.Movies);
    movie = movies.find(({ id }) => movieId === id) || makeNewMovie();
  } else {
    movie = makeNewMovie();
  }
  console.log(history);
  return (<MovieForm key={movieId} movie={movie} history={history} />);
});

import { observable } from 'mobx';
import MovieStore from './movie';
import { movies as JSONMovies } from '../data/movies';

class MoviesStore {
  @observable movies = JSONMovies.map(movie => new MovieStore(movie));
}

export default MoviesStore;

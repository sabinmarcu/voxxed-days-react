import { observable, action } from 'mobx';
import MovieStore from './movie';

class MoviesStore {
  @observable movies = [];

  constructor() {
    this.fetchMovies();
  }

  @action fetchMovies = async () => {
    this.movies = await fetch('//localhost:8000/movies')
      .then(data => data.json())
      .then(movies => movies.map(movie => new MovieStore(movie)));
  }
}

export default MoviesStore;

import {
  observable, action,
} from 'mobx';
import * as mobxUtils from 'mobx-utils';
import { from, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import MovieStore from './movie';

class MoviesStore {
  @observable movies = [];

  @observable query = '';

  constructor() {
    this.fetchMovies();
    from(mobxUtils.toStream(() => this.query))
      .pipe(debounce(() => timer(500)))
      .subscribe(newValue => this.fetchMovies(newValue));
  }

  @action updateQuery = ({ target: { value } }) => {
    this.query = value;
  }

  @action fetchMovies = async (searchQuery) => {
    const query = searchQuery
      ? `?q=${searchQuery}`
      : '';
    this.movies = await fetch(`//localhost:8000/movies${query}`)
      .then(data => data.json())
      .then(movies => movies.map(movie => new MovieStore(movie)));
  }
}

export default MoviesStore;

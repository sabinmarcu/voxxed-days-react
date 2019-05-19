import { observable, action } from 'mobx';
import CommentStore from './comment';

class MovieStore {
  @observable id;

  @observable title;

  @observable year;

  @observable genre;

  @observable plot;

  @observable poster;

  @observable comment;

  MoviesStore;

  constructor(movie, store) {
    this.MoviesStore = store;
    if (movie) {
      Object.entries(movie)
        .forEach(
          ([key, value]) => { this[key] = value; },
        );
    }
    this.comment = new CommentStore(this);
  }

  @action updateKey = (key, { target: { value } }) => {
    this[key] = value;
  };

  @action saveAction = () => {
    if (this.id) {
      return fetch(`//localhost:8000/movies/${this.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          plot: this.plot,
          poster: this.poster,
          title: this.title,
          year: this.year,
          genre: this.genre,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    }
    return fetch('//localhost:8000/movies/', {
      method: 'POST',
      body: JSON.stringify({
        plot: this.plot,
        poster: this.poster,
        title: this.title,
        year: this.year,
        genre: this.genre,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(() => this.MoviesStore.fetchMovies());
  }

  @action removeAction = () => {
    fetch(`//localhost:8000/movies/${this.id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(() => this.MoviesStore.fetchMovies());
  }
}

export default MovieStore;

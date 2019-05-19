import { observable } from 'mobx';
import CommentStore from './comment';

class MovieStore {
  @observable id;

  @observable title;

  @observable year;

  @observable genre;

  @observable plot;

  @observable poster;

  @observable comment;

  constructor(movie) {
    if (movie) {
      Object.entries(movie)
        .forEach(
          ([key, value]) => { this[key] = value; },
        );
    }
    this.comment = new CommentStore(this);
  }
}

export default MovieStore;

import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

const MovieForm = ({ movie: MovieStore, history }) => {
  const {
    title,
    year,
    genre,
    plot,
    poster,
    updateKey,
    saveAction,
  } = MovieStore;
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Add/edit movie</span>
        <div className="row">
          <div className="col s8">
            <div className="input-field">
              <input
                type="text"
                className="validate"
                required
                placeholder="Title *"
                value={title}
                onChange={updateKey.bind(MovieStore, 'title')}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                className="validate"
                required
                placeholder="Genre *"
                value={genre}
                onChange={updateKey.bind(MovieStore, 'genre')}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                className="validate"
                required
                placeholder="Year *"
                value={year}
                onChange={updateKey.bind(MovieStore, 'year')}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                className="validate"
                required
                placeholder="Plot *"
                value={plot}
                onChange={updateKey.bind(MovieStore, 'plot')}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                className="validate"
                placeholder="Poster src"
                value={poster}
                onChange={updateKey.bind(MovieStore, 'poster')}
              />
            </div>
          </div>
          <div className="col s4">
            <img
              className="poster"
              src={poster}
            />
          </div>
        </div>
        <div className="card-action">
          <button
            className="btn"
            onClick={() => saveAction().then(() => history.push('/'))}
          >
            Save/update movie
          </button>
          <Link to="/" className="btn deep-orange">Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default observer(MovieForm);

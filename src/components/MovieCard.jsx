/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
import Comment from './MovieComment';

class MovieCard extends Component {
  render() {
    const {
      movie: {
        id,
        title,
        year,
        genre,
        poster,
        plot,
        removeAction,
        comment,
      },
    } = this.props;
    return (
      <div
        className={[
          'card',
          'horizontal',
          'row',
          'col',
          'm6',
          's12',
          styles.card,
        ].join(' ')}
      >
        <div
          className={[
            'card-image',
            'col',
            's3',
            styles.imageWrapper,
          ].join(' ')}
        >
          <img
            src={poster}
            alt="poster"
          />
        </div>
        <div className="card-stacked col s9">
          <div className={['card-content', styles.content].join(' ')}>
            <div className={['card-header', styles.header].join(' ')}>
              <div className="card-title">
                {title}
                <span className={styles.year}>
                  (
                  {year}
                  )
                </span>
              </div>
              <span className={styles.genre}>{genre}</span>
            </div>
            <p>{plot}</p>
            <Comment comment={comment} />
            <div className="card-actions">
              <Link className="btn indigo accent-2" to={`/edit/${id}`}>Edit movie</Link>
              <button
                className="btn deep-orange"
                onClick={removeAction}
              >
                Delete movie
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;

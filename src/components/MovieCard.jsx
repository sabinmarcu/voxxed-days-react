/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import styles from './MovieCard.module.css';

class MovieCard extends Component {
  render() {
    return (
      <div className="card horizontal row col m6 s12">
        <div
          className={[
            'card-image',
            'col',
            's3',
            styles.imageWrapper,
          ].join(' ')}
        >
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51poKKV63GL.jpg"
            alt="poster"
          />
        </div>
        <div className="card-stacked col s9">
          <div className="card-content">
            <div className={['card-header', styles.header].join(' ')}>
              <div className="card-title">
              Star Wars: The Last Jedi
                <span className={styles.year}>(2017)</span>
              </div>
              <span className={styles.genre}>Action, Adventure, Fantasy </span>
            </div>
            <p>Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;

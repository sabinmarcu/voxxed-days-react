import React from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import styles from './MovieComment.module.css';

const Comment = ({
  comment: store,
}) => {
  const {
    value, id, saveComment, isValid, wordCount, updateValue,
  } = useObservable(store);
  return (
    <>
      <div className="comment">
        <div className="input-field">
          <textarea
            placeholder="Comment"
            id={`comment-${id}`}
            className="materialize-textarea"
            value={value}
            onChange={updateValue}
          />
          <div className={[styles.wordcount, isValid && styles.valid].join(' ')}>
            {wordCount}
            {' '}
              words
          </div>
        </div>
      </div>
      <div className="card-action">
        <button
          className={isValid ? 'btn' : 'btn-flat'}
          onClick={() => saveComment()}
        >
          Save comment
        </button>
      </div>
    </>
  );
};

export default observer(Comment);

import React, { useState, useEffect } from 'react';
import styles from './MovieComment.module.css';

const getWordCount = str => (str ? str.trim().split(' ').length : 0);
const getIsValid = str => str.length > 0 && getWordCount(str) >= 3;

const Comment = ({ id, comment, saveComment }) => {
  const [value, setValue] = useState(comment);
  const [wordCount, setWordCount] = useState(getWordCount(comment));
  const [isValid, setIsValid] = useState(getIsValid(comment));
  useEffect(
    () => {
      setIsValid(getIsValid(value));
      setWordCount(getWordCount(value));
    },
    [value],
  );
  return (
    <>
      <div className="comment">
        <div className="input-field">
          <textarea
            placeholder="Comment"
            id={`comment-${id}`}
            className="materialize-textarea"
            value={value}
            onChange={({ target: { value: newValue } }) => setValue(newValue)}
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
          onClick={() => saveComment(value)}
        >
          Save comment
        </button>
      </div>
    </>
  );
};

export default Comment;

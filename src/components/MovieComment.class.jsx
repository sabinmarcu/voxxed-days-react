import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styles from './MovieComment.module.css';

@observer
class Comment extends Component {
  render() {
    const {
      comment: {
        id, isValid, wordCount, value, saveComment, updateValue,
      },
    } = this.props;
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
            onClick={() => saveComment(value)}
          >
            Save comment
          </button>
        </div>
      </>
    );
  }
}

export default Comment;

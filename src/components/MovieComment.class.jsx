import React, { Component } from 'react';
import styles from './MovieComment.module.css';

const getWordCount = str => (str ? str.trim().split(' ').length : 0);
const getIsValid = str => str.length > 0 && getWordCount(str) >= 3;

class Comment extends Component {
  state = {
    value: '',
  }

  componentDidMount() {
    const { comment } = this.props;
    this.setState({ value: comment });
  }

  render() {
    const { id, saveComment } = this.props;
    const { value } = this.state;
    const isValid = getIsValid(value);
    const wordCount = getWordCount(value);
    return (
      <>
        <div className="comment">
          <div className="input-field">
            <textarea
              placeholder="Comment"
              id={`comment-${id}`}
              className="materialize-textarea"
              value={value}
              onChange={({ target: { value: newValue } }) => this.setState({ value: newValue })}
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

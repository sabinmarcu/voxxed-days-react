import { observable, computed, action } from 'mobx';

class CommentStore {
  @observable id

  @observable comment

  @observable value

  @computed get wordCount() {
    return this.value.length > 0 ? this.value.trim().split(' ').length : 0;
  }

  @computed get isValid() {
    return this.wordCount >= 3;
  }

  @action saveComment = () => {
    this.comment = this.value;
  }

  @action updateValue = ({ target: { value } }) => {
    this.value = value;
  }

  constructor({ comment, id }) {
    this.value = comment;
    this.id = id;
    this.comment = comment;
  }
}

export default CommentStore;

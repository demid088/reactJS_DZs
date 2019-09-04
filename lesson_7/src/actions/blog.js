import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Blog] loading started');
export const loadCompleted = createAction('[Blog] loading completed');
export const loadFailed = createAction('[Blog] loading failed');

export const load = (dispatch) => {
  // this.setState({ loading: true });
  dispatch(loadStarted());

  fetch(`http://jsonplaceholder.typicode.com/posts?_limit=5`)
    .then((response) => response.json())
    .then((contents) => {
      // this.setState({
      //   loading: false,
      //   comments: this.state.comments.concat(comments),
      //   page: this.state.page + 1
      // })
      dispatch(loadCompleted(contents))
    })
    .catch(() => {
      // this.setState(
      //   { loading: false }
      // )
      dispatch(loadFailed());
    })
}

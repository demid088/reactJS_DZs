import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Comments] loading started');
export const loadCompleted = createAction('[Comments] loading completed');
export const loadFailed = createAction('[Comments] loading failed');

export const load = (dispatch) => {
  // this.setState({ loading: true });
  dispatch(loadStarted());

  fetch(`http://jsonplaceholder.typicode.com/comments?_limit=15`)
    .then((response) => response.json())
    .then((comments) => {
      // this.setState({
      //   loading: false,
      //   comments: this.state.comments.concat(comments),
      //   page: this.state.page + 1
      // })
      dispatch(loadCompleted(comments))
    })
    .catch(() => {
      // this.setState(
      //   { loading: false }
      // )
      dispatch(loadFailed());
    })
}
import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Users] loading started');
export const loadCompleted = createAction('[Users] loading completed');
export const loadFailed = createAction('[Users] loading failed');

export const load = (dispatch) => {
  // this.setState({ loading: true });
  dispatch(loadStarted());

  fetch(`http://jsonplaceholder.typicode.com/users?_limit=15`)
    .then((response) => response.json())
    .then((users) => {
      // this.setState({
      //   loading: false,
      //   comments: this.state.comments.concat(comments),
      //   page: this.state.page + 1
      // })
      dispatch(loadCompleted(users))
    })
    .catch(() => {
      // this.setState(
      //   { loading: false }
      // )
      dispatch(loadFailed());
    })
}
import { handleActions } from 'redux-actions';

import { loadStarted, loadCompleted, loadFailed } from 'actions/comments';

const initialState = {
  loading: false,
  entities: [],
  page: 1
}

export default handleActions(
  {
    [loadStarted]: (state) => {
      return {
        ...state,
        loading: true
      }
    },
    [loadCompleted]: (state, action) => {
      return {
        ...state,
        loading: false,
        entities: state.entities.concat(action.payload),
        page: state.page + 1
      }
    },
    [loadFailed]: (state) => {
      return {
        ...state,
        loading: false
      }
    }
  },
  initialState
);
import { handleActions } from 'redux-actions';

import { loadStarted, loadCompleted, loadFailed } from 'actions/users';

const initialState = {
  loading: false,
  entities: []
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
        entities: state.entities.concat(action.payload)
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
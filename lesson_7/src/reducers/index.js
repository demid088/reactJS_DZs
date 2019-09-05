import { combineReducers } from 'redux';

import commentsReducer from './comments';
import blogReducer from './blog';
import usersReducer from './users';

export default combineReducers({
  comments: commentsReducer,
  blog: blogReducer,
  users: usersReducer
});
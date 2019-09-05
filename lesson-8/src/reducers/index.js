import { combineReducers } from 'redux';

import commentsReducer from './comments';
import blogReducer from './blog';
import usersReducer from './users';
import messagesReducer from './messages';

export default combineReducers({
  comments: commentsReducer,
  blog: blogReducer,
  users: usersReducer,
  messages: messagesReducer
});
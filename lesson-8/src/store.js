import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';

//import logger from 'redux-logger';
function logger(store) {
  return function (next) {
    return function(action) {
      console.log('action', action);
      console.log('prev state', store.getState());

      let result = next(action);

      console.log('next state', store.getState());

      return result;
    }
  }
}

// экспорт объекта хранилища (STORE)
export default createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
);
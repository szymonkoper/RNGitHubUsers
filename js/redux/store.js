import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';

function configureStore(initialState = {}) {
  return createStore(reducer, initialState, applyMiddleware(thunk, logger));
}

export default configureStore();

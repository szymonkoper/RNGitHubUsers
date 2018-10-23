import { combineReducers } from 'redux';
import * as types from './types';

export const repositories = (state = [], action) => {
  switch (action.type) {
    case types.REPOSITORIES_LOADING:
    case types.REPOSITORIES_ERROR:
      return [];
    case types.REPOSITORIES_SHOW:
      return action.repositories;
    default:
      return state;
  }
};

export const loading = (state = false, action) => {
  switch (action.type) {
    case types.REPOSITORIES_LOADING:
      return true;
    case types.REPOSITORIES_SHOW:
    case types.REPOSITORIES_ERROR:
      return false;
    default:
      return state;
  }
};

export const error = (state = null, action) => {
  switch (action.type) {
    case types.REPOSITORIES_ERROR:
      return action.error;
    case types.REPOSITORIES_LOADING:
    case types.REPOSITORIES_SHOW:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  repositories, loading, error,
});

import { combineReducers } from 'redux';
import * as types from './types';

export const owners = (state = [], action) => {
  switch (action.type) {
    case types.OWNERS_LOADING:
    case types.OWNERS_ERROR:
      return [];
    case types.OWNERS_SHOW:
      return action.owners;
    default:
      return state;
  }
};

export const loading = (state = false, action) => {
  switch (action.type) {
    case types.OWNERS_LOADING:
      return true;
    case types.OWNERS_SHOW:
    case types.OWNERS_ERROR:
      return false;
    default:
      return state;
  }
};

export const error = (state = null, action) => {
  switch (action.type) {
    case types.OWNERS_ERROR:
      return action.error;
    case types.OWNERS_LOADING:
    case types.OWNERS_SHOW:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  owners, loading, error,
});

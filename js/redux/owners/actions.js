import { sortBy } from 'sort-by-chain';
import client from '../../api/client';
import { ownersQuery } from '../../api/queries';
import * as types from './types';
import User from '../../models/User';

export const loadingOwners = () => ({ type: types.OWNERS_LOADING });

export const showOwners = owners => ({
  type: types.OWNERS_SHOW,
  owners,
});

export const showOwnersError = error => ({
  type: types.OWNERS_ERROR,
  error,
});

const ownersFromData = (data) => {
  const owners = data.search.nodes
    .map(it => new User(it.login, it.name, it.avatarUrl, it.repositories.totalCount));

  sortBy(owners, 'login');
  return owners;
};

export const getOwners = searchText => async (dispatch) => {
  dispatch(loadingOwners());

  client
    .query({ query: ownersQuery, variables: { searchText } })
    .then(({ error, data }) => {
      if (error) {
        throw new Error(error);
      }

      return dispatch(showOwners(ownersFromData(data)));
    })
    .catch(error => dispatch(showOwnersError(error)));
};

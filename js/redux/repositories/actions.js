import { sortBy } from 'sort-by-chain';
import client from '../../api/client';
import { repositoriesQuery } from '../../api/queries';
import * as types from './types';
import Repository from '../../models/Repository';

export const loadingRepositories = () => ({ type: types.REPOSITORIES_LOADING });

export const showRepositories = repositories => ({
  type: types.REPOSITORIES_SHOW,
  repositories,
});

export const showRepositoriesError = error => ({
  type: types.OWNERS_ERROR,
  error,
});

const repositoriesFromData = (data) => {
  const repositories = data.repositoryOwner.repositories.nodes
    .map(it => new Repository(it.name, it.url, it.updatedAt, it.description));

  sortBy(repositories, '-updatedAt', 'name');
  return repositories;
};

export const getRepositories = ownerLogin => async (dispatch) => {
  dispatch(loadingRepositories());

  client
    .query({ query: repositoriesQuery, variables: { ownerLogin } })
    .then(({ error, data }) => {
      if (error) {
        throw new Error(error);
      }

      return dispatch(showRepositories(repositoriesFromData(data)));
    })
    .catch(error => dispatch(showRepositoriesError(error)));
};

import gql from 'graphql-tag';

export const ownersQuery = gql`
query ($searchText: String!) {
  search(query: $searchText, type: USER, last: 20) {
    nodes {
      ... on RepositoryOwner {
        login
        avatarUrl
        repositories {
          totalCount
        }
      }
      ... on User {
        name
      }
      ... on Organization {
        name
      }
    }
  }
}
`;

export const repositoriesQuery = gql`
query ($ownerLogin: String!) {
  repositoryOwner(login: $ownerLogin) {
    ... on RepositoryOwner {
      login
      url
      repositories(last: 100) {
        nodes {
          name
          url
          updatedAt
          description
        }
      }
    }
    ... on User {
      name
    }
    ... on Organization {
      name
    }
  }
}
`;

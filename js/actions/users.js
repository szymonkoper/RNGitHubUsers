import gql from 'graphql-tag';

export const fetchUsers = gql`
query ($name: String!) {
  search(query: $name, type: USER, last: 10) {
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

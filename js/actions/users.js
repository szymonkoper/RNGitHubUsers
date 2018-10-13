import gql from 'graphql-tag';

export default gql`
query ($name: String!) {
  search(query: $name, type: USER, last: 100) {
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

import gql from 'graphql-tag';

export default gql`
query ($login: String!) {
  repositoryOwner(login: $login) {
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

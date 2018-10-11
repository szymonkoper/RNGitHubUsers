import gql from 'graphql-tag';

export const fetchRepositories = gql`
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

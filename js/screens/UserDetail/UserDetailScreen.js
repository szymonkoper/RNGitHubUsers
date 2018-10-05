import React from 'react';
import { Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import RepositoriesFlatList from './Components/RepositoriesFlatList';
import Repository from '../../Models/Repository';

class UserDetailScreen extends React.PureComponent {
  render = () => {
    const { data } = this.props;

    if (data.loading) {
      return <Text>loading</Text>;
    }

    const { repositoryOwner } = data;
    const repositories = repositoryOwner.repositories.nodes
      .map(it => new Repository(it.name, it.url, it.updatedAt, it.description));

    return <RepositoriesFlatList data={repositories} />;
  }
}

const GET_USERS = gql`
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

const EnhancedUserDetailScreen = graphql(
  GET_USERS, {
    options: props => ({
      variables: {
        login: props.navigation.getParam('login', 'NO-LOGIN'),
      },
    }),
  },
)(UserDetailScreen);

export default EnhancedUserDetailScreen;

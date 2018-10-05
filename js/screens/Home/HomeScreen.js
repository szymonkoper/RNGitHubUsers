import React from 'react';
import { Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import UsersFlatList from './Components/UsersFlatList';
import User from '../../Models/User';

class HomeScreen extends React.Component {
  onUserPressed = (login) => {
    const { props } = this;
    props.navigation.navigate('UserDetail', { login });
  }

  render = () => {
    const { data } = this.props;
    if (data.loading) {
      return <Text>loading</Text>;
    }

    const repositoryOwners = data.search.nodes
      .map(it => new User(it.login, it.name, it.avatarUrl, it.repositories.totalCount));

    return <UsersFlatList data={repositoryOwners} onUserPressed={this.onUserPressed} />;
  }
}

const GET_USERS = gql`
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

const EnhancedHomeScreen = graphql(
  GET_USERS, {
    options: props => ({
      variables: {
        name: 'google',
      },
    }),
  },
)(HomeScreen);

export default EnhancedHomeScreen;

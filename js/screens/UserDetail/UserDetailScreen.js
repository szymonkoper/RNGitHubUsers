import React from 'react';
import { Text } from 'react-native';
import { graphql } from 'react-apollo';
import RepositoriesFlatList from './Components/RepositoriesFlatList';
import Repository from '../../Models/Repository';
import { fetchRepositories } from '../../actions/repositories';

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

const EnhancedUserDetailScreen = graphql(
  fetchRepositories, {
    options: props => ({
      variables: {
        login: props.navigation.getParam('login', 'NO-LOGIN'),
      },
    }),
  },
)(UserDetailScreen);

export default EnhancedUserDetailScreen;

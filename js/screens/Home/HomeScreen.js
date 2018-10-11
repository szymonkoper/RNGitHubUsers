import React from 'react';
import { View, Text, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { graphql } from 'react-apollo';
import UsersFlatList from './Components/UsersFlatList';
import User from '../../Models/User';
import { fetchUsers } from '../../actions/users';

class HomeScreen extends React.Component {
  onUserPressed = (login) => {
    const { props } = this;
    props.navigation.navigate('UserDetail', { login });
  }

  onSearchText = (text) => {
    console.log(text);
  }

  render = () => {
    const { data } = this.props;
    if (data.loading) {
      return <Text>loading</Text>;
    }

    const repositoryOwners = data.search.nodes
      .map(it => new User(it.login, it.name, it.avatarUrl, it.repositories.totalCount));

    return (
      <View>
        <SearchBar
          onChangeText={this.onSearchText}
          // onClear={someMethod}
          platform={Platform.OS}
          placeholder="Type Here..."
        />
        <UsersFlatList data={repositoryOwners} onUserPressed={this.onUserPressed} />
      </View>
    );
  }
}

const EnhancedHomeScreen = graphql(
  fetchUsers, {
    options: props => ({
      variables: {
        name: 'google',
      },
    }),
  },
)(HomeScreen);

export default EnhancedHomeScreen;

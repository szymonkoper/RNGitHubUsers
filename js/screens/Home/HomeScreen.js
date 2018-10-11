import React from 'react';
import { View, Text, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Query } from 'react-apollo';
import _ from 'lodash';
import UsersFlatList from './Components/UsersFlatList';
import User from '../../Models/User';
import { fetchUsers } from '../../actions/users';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'google' };
  }

  onUserPressed = (login) => {
    const { props } = this;
    props.navigation.navigate('UserDetail', { login });
  }

  onSearchText = (text) => {
    this.setState({ name: text });
  }

  onSearchTextDebounced = _.debounce(this.onSearchText, 500);

  render = () => {
    const { name } = this.state;

    return (
      <Query query={fetchUsers} variables={{ name }} skip={!name.trim()}>
        {({ loading, error, data }) => {
          let users = [];
          if (data && data.search && data.search.nodes) {
            users = data.search.nodes
              .map(it => new User(it.login, it.name, it.avatarUrl, it.repositories.totalCount));
          }

          return (
            <View>
              <SearchBar
                onChangeText={this.onSearchTextDebounced}
                platform={Platform.OS}
                placeholder="Type Here..."
              />
              {loading ? <Text>loading</Text> : null}
              {!loading && users.length === 0 ? <Text>Found nothing :(</Text> : null}
              {error ? <Text>{error}</Text> : null}
              <UsersFlatList data={users} onUserPressed={this.onUserPressed} />
            </View>
          );
        }}
      </Query>
    );
  };
}

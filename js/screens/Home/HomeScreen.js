import React from 'react';
import { ScrollView, View, Text, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Query } from 'react-apollo';
import _ from 'lodash';
import UsersFlatList from './Components/UsersFlatList';
import FoundNothingView from './Components/FoundNothingView';
import User from '../../Models/User';
import { fetchUsers } from '../../actions/users';

export default class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: '' };
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
            <ScrollView>
              <SearchBar
                text={name}
                onChangeText={this.onSearchTextDebounced}
                platform={Platform.OS}
                placeholder="Type Here..."
              />
              <View>
                {loading ? <Text>loading</Text> : null}
                {!loading && users.length === 0 ? <FoundNothingView/> : null}
                {error ? <Text>{error}</Text> : null}
              </View>
              <UsersFlatList data={users} onUserPressed={this.onUserPressed} />
            </ScrollView>
          );
        }}
      </Query>
    );
  };
}

import React from 'react';
import { ScrollView, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Query } from 'react-apollo';
import _ from 'lodash';
import { sortBy } from 'sort-by-chain';
import UsersFlatList from './Components/UsersFlatList';
import User from '../../Models/User';
import { fetchUsers } from '../../actions/users';
import AdditionalInfoView from '../Components/AdditionalInfoView';

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
          if (!error && !loading && data && data.search && data.search.nodes) {
            users = data.search.nodes
              .map(it => new User(it.login, it.name, it.avatarUrl, it.repositories.totalCount));

            sortBy(users, 'login');
          }

          return (
            <ScrollView>
              <SearchBar
                text={name}
                onChangeText={this.onSearchTextDebounced}
                platform={Platform.OS}
                placeholder="Type Here..."
              />
              <AdditionalInfoView loading={loading} error={error} dataLength={users.length} />
              <UsersFlatList data={users} onUserPressed={this.onUserPressed} />
            </ScrollView>
          );
        }}
      </Query>
    );
  };
}

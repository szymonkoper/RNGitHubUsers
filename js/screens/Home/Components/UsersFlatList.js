import React from 'react';
import { FlatList } from 'react-native';
import User from '../../../Models/User';
import UserListItem from './UserListItem';

const MOCK_USERS_DATA = [
  new User('sakydpozrux', 'Szymon Koper', '??', 23),
  new User('pangrzyb', 'Grzyb Grzybowski', '??', 5),
  new User('jan_niejadek', 'J Niejadek', '??', 1),
];

export default class UsersFlatList extends React.PureComponent {
  renderItem = ({ item }) => {
    console.log(item);
    return <UserListItem login={item.login} />;
  }

  keyExtractor = (item, index) => item.login;

  render() {
    console.log(MOCK_USERS_DATA);
    return (
      <FlatList
        data={MOCK_USERS_DATA}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

import React from 'react';
import { FlatList, Text } from 'react-native';

const MOCK_USERS_DATA = [
  { key: 'a', username: 'aaa' },
  { key: 'b', username: 'bbb' },
];

class UserListItem extends React.PureComponent {
  render() {
    return (
      <Text>{this.props.username}</Text>
    );
  }
}

export default class UsersFlatList extends React.PureComponent {
  renderItem = ({ item }) => {
    return <UserListItem username={item.username}/>;
  }

  render() {
    return (
      <FlatList
        data={MOCK_USERS_DATA}
        renderItem={this.renderItem}
      />
    );
  }
}

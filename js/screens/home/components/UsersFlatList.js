import React from 'react';
import { FlatList } from 'react-native';
import UserListItem from './UserListItem';

export default class UsersFlatList extends React.PureComponent {
  onPress = (login) => {
    const { props } = this;
    props.onUserPressed(login);
  }

  renderItem = ({ item }) => (
    <UserListItem
      login={item.login}
      name={item.name}
      totalRepos={item.totalRepos}
      avatarUrl={item.avatarUrl}
      onPress={this.onPress}
    />
  );

  keyExtractor = item => item.login;

  render = () => {
    const { props } = this;

    return (
      <FlatList
        data={props.data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

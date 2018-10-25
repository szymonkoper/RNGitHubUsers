import React from 'react';
import { FlatList } from 'react-native';
import OwnerListItem from './OwnerListItem';

export default class OwnersFlatList extends React.PureComponent {
  onPress = (login) => {
    const { props } = this;
    props.onOwnerPressed(login);
  }

  renderItem = ({ item }) => (
    <OwnerListItem
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

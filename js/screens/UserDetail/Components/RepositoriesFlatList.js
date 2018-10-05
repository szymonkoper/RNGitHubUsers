import React from 'react';
import { FlatList, Text } from 'react-native';
//import RepositoryListItem from './RepositoryListItem';

export default class RepositoriesFlatList extends React.PureComponent {
  renderItem = ({ item }) => (
    <Text>{item.url}</Text>
  );

  keyExtractor = item => item.url;

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

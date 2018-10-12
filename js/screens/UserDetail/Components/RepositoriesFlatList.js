import React from 'react';
import { FlatList } from 'react-native';
import RepositoryListItem from './RepositoryListItem';

export default class RepositoriesFlatList extends React.PureComponent {
  renderItem = ({ item }) => (
    <RepositoryListItem
      name={item.name}
      url={item.url}
      updatedAt={item.updatedAt}
      description={item.description}
    />
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

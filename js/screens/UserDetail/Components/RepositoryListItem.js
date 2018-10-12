import React from 'react';
import { ListItem } from 'react-native-elements';

export default class RepositoryListItem extends React.PureComponent {
  render = () => {
    const { props } = this;
    return (
      <ListItem
        key={props.url}
        title={props.name}
        titleProps={{ numberOfLines: 1 }}
        rightTitle={props.updatedAt}
        rightTitleProps={{ numberOfLines: 2 }}
        subtitle={props.description}
        subtitleProps={{ numberOfLines: 1 }}
      />
    );
  }
}

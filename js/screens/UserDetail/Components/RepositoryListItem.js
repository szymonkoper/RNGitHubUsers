import React from 'react';
import { ListItem } from 'react-native-elements';
import Moment from 'moment';

export default class RepositoryListItem extends React.PureComponent {
  render = () => {
    const { props } = this;
    return (
      <ListItem
        key={props.url}
        title={props.name}
        titleProps={{ numberOfLines: 1 }}
        rightTitle={ Moment(props.updatedAt).calendar() }
        rightTitleProps={{ numberOfLines: 2 }}
        subtitle={props.description}
        subtitleProps={{ numberOfLines: 1 }}
      />
    );
  }
}

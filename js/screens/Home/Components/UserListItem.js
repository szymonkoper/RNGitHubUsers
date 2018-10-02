import React from 'react';
import { Text } from 'react-native';

export default class UserListItem extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <Text>{props.login}</Text>
    );
  }
}

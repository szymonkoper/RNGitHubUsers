import React from 'react';
import { Text } from 'react-native';

export default class UserListItem extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <>
        <Text>- - - - -</Text>
        <Text>{props.login}</Text>
        <Text>{props.name}</Text>
        <Text>{props.totalRepos}</Text>
        <Text>- - - - -</Text>
      </>
    );
  }
}

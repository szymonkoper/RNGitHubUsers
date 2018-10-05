import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class UserListItem extends React.PureComponent {
  onPress = () => {
    const { props } = this;
    props.onPress(props.login);
  }

  render = () => {
    const { props } = this;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Text>- - - - -</Text>
        <Text>{props.login}</Text>
        <Text>{props.name}</Text>
        <Text>{props.totalRepos}</Text>
        <Text>- - - - -</Text>
      </TouchableOpacity>
    );
  }
}

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class UserListItem extends React.PureComponent {
  onPress = () => {
    const { props } = this;
    props.onPress(props.login);
  }

  render = () => {
    const { props } = this;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <ListItem
          key={props.login}
          leftAvatar={{ source: props.avatarUrl && { uri: props.avatarUrl } }}
          title={props.login}
          subtitle={props.name}
          badge={{ value: props.totalRepos }}
        />
      </TouchableOpacity>
    );
  }
}

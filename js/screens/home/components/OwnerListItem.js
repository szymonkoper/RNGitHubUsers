import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class OwnerListItem extends React.PureComponent {
  onPress = () => {
    const { props } = this;
    props.onPress(props.login);
  }

  render = () => {
    const { props } = this;
    return (
      <TouchableOpacity testID="OwnerListItem" onPress={this.onPress}>
        <ListItem
          key={props.login}
          leftAvatar={{ source: props.avatarUrl && { uri: props.avatarUrl } }}
          title={props.login}
          titleProps={{ numberOfLines: 1 }}
          subtitle={props.name}
          subtitleProps={{ numberOfLines: 1 }}
          badge={{ value: props.totalRepos }}
          chevron
        />
      </TouchableOpacity>
    );
  }
}

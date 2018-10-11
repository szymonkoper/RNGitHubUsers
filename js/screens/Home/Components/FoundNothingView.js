import React from 'react';
import { View, Text} from 'react-native';

export default class FoundNothingView extends React.PureComponent {
  render = () => (
    <View>
      <Text>Found nothing</Text>
    </View>
  );
}

import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default class FoundNothingView extends React.PureComponent {
  render = () => (
    <View>
      <LottieView
        style={{ width: 200, height: 200, alignSelf: 'center' }}
        source={require('../../../Resources/Lottie/foundNothing.json')}
        autoPlay
        loop
      />
      <Text style={{ fontSize: 18, alignSelf: 'center', marginTop: 25 }}>Nothing here</Text>
    </View>
  );
}

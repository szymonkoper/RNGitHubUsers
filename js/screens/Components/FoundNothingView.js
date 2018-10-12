import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const animationSource = require('../../../Resources/Lottie/foundNothing.json');

export default () => (
  <View>
    <LottieView
      style={{ width: 200, height: 200, alignSelf: 'center' }}
      source={animationSource}
      autoPlay
      loop
    />
    <Text style={{ fontSize: 18, alignSelf: 'center', marginTop: 25 }}>Nothing here</Text>
  </View>
);

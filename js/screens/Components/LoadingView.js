import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const animationSource = require('../../../resources/lottie/loading.json');

export default () => (
  <View>
    <LottieView
      style={{ width: 200, height: 60, alignSelf: 'center' }}
      source={animationSource}
      autoPlay
      loop
    />
  </View>
);

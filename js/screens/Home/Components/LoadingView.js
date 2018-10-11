import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class LoadingView extends React.PureComponent {
  render = () => (
    <View>
      <LottieView
        style={{ width: 200, height: 60, alignSelf: 'center' }}
        source={require('../../../../Resources/Lottie/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
}

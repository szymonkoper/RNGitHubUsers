import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default class ErrorView extends React.PureComponent {
  render = () => (
    <View>
      <LottieView
        style={{ width: 200, height: 200, alignSelf: 'center' }}
        source={require('../../../Resources/Lottie/party_penguin.json')}
        autoPlay
        loop
      />
      <Text style={{ fontSize: 18, alignSelf: 'center', marginTop: 25 }}>Something went wrong...</Text>
    </View>
  );
}

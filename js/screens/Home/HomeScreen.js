import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import styles from './styles';
import UsersFlatList from './Components/UsersFlatList';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UsersFlatList />
      </View>
    );
  }
}

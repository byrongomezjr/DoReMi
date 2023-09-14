import React, { Component } from 'react';
import Header from './components/Header';

import {
  View,
  Text,
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
        <Header message="Playing from Charts" />
      </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
}

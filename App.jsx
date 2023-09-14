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
    paddingTop: 30,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#5C5C5C',
  },
}

/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {View, Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Do Re Mi</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
};

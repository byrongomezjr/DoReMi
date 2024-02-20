import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Header = ({
  message,
  onDownPress,
  onQueuePress,
  onMessagePress,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onDownPress}>
      <Image style={styles.button}
        source={require('../img/keyboard_arrow_down_FILL0_wght400_GRAD0_opsz24.png')} />
    </TouchableOpacity>
    <Text onPress={onMessagePress}
      style={styles.message}>{message.toUpperCase()}</Text>
    <TouchableOpacity onPress={onQueuePress}>
      <Image style={styles.button}
        source={require('../img/more_horiz_FILL0_wght400_GRAD0_opsz24.png')} />
    </TouchableOpacity>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 160,
    paddingTop: 60,
    paddingBottom: 20,
    marginTop: 2,
    marginBottom: 2,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    opacity: 0.75,
    tintColor: '#FFFFFF',
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

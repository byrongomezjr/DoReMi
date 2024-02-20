import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const AlbumArt = ({ url, onPress}) => (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={{uri: url}} />
      </TouchableOpacity>
    </View>
  );

  export default AlbumArt;

  const { width, height } = Dimensions.get('window');
const imageSize = width - 70;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
})
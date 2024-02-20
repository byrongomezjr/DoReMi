import React, {Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlights,
    Dimensions,
} from 'react-native'

const TrackDetails = ({
    title,
    artist,
    onAddPress,
    onMorePress,
    onTitlePress,
    onArtistPress,
}) => (
    <View style={styles.container}>
    <View style={styles.detailsWrapper}>
      <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
      <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
    </View>
    <TouchableOpacity onPress={onMorePress}>
      <View style={styles.moreButton}>
        <Image style={styles.moreButtonIcon}
          source={require('../img/add_circle_FILL0_wght400_GRAD0_opsz24.png')} />
      </View>
    </TouchableOpacity>
  </View>
)

export default TrackDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexDirection: 'row',
    paddingLeft: 25,
    alignItems: 'center',
    paddingRight: 25,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'left',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  },
  artist: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 18,
    marginTop: 4,
  },
  button: {
    opacity: 0.75,
    tintColor: '#FFFFFF',
  },
  moreButton: {
    borderColor: 'rgb(255, 255, 255)',
    opacity: 0.75,
    borderRadius: 12,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonIcon: {
    height: 30,
    width: 30,
    tintColor: '#FFFFFF'
  }
});
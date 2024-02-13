import React, { Component } from 'react';
import Header from './components/Header';
import AlbumArt from './components/AlbumArt';
import TrackDetails from './components/TrackDetails';

import {
  View,
  Text,
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="Now Playing" />
        <AlbumArt url="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg" />
        <TrackDetails title="Stressed Out"
          artist="Twenty One Pilots" />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#303030',
  },
}

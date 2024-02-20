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
        <AlbumArt url="https://i.scdn.co/image/ab67616d0000b273f37950978573d045e79d886b" />
        <TrackDetails title="Sin Poderte Hablar"
          artist="Willie Colón" />
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

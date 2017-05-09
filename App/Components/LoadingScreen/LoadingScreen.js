import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay'

class LoadingScreen extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <Spinner visible={ true } color='#2980b9' size={ 150 } />
      </View>
    )
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
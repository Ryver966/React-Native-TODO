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
      <Spinner visible={ true } color='#2980b9' size='large' />
    )
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({

})
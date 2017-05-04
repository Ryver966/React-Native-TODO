import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import store from './App/mobX/listStore';

import App from './App/Components/App';

export default class ReactNativeTodo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  }
});

AppRegistry.registerComponent('ReactNativeTodo', () => ReactNativeTodo);

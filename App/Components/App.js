import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SignInScreen from './SignInScreen/SignInScreen';

class App extends Component {
  render() {
    return(
      <View style={ styles.appContainer }>
        <SignInScreen />
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})
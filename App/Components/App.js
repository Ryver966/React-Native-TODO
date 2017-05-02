import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import SignInScreen from './SignInScreen/SignInScreen';
import SignUpScreen from './SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen/ForgotPasswordScreen';
import MyBoards from './MyBoards/MyBoards';

class App extends Component {

  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    switch(route.id){
      case 'signInScreen':
      return <SignInScreen navigator={ navigator } title='signInScreen' />
      case 'signUpScreen':
      return <SignUpScreen navigator={ navigator } title='signUpScreen' />
      case 'forgotPassScreen':
      return <ForgotPasswordScreen navigator={ navigator } title='forgotPassScreen' />
      case 'myBoards':
      return <MyBoards navigator={ navigator } title='myBoards' />
    }
  }

  render() {
    return(
      <View style={ styles.appContainer }>
        <Navigator
          initialRoute={{ id: 'signInScreen' }}
          renderScene={ this.renderScene }
        />
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

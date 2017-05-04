import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import * as firebase from 'firebase';

import SignInScreen from './SignInScreen/SignInScreen';
import SignUpScreen from './SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen/ForgotPasswordScreen';
import MyBoards from './MyBoards/MyBoards';

class App extends Component {

  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);

    this.state = {
      user: null,
      isLoading: true
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ 
          user: user ,
          isLoading: false
        })
      } else {
        this.setState({ 
          user: null,
          isLoading: false
        })
      }
    })
  }

  renderScene(route, navigator) {
    switch(route.id){
      case 'signInScreen':
      return <SignInScreen user={ this.state.user } navigator={ navigator } title='signInScreen' />
      case 'signUpScreen':
      return <SignUpScreen navigator={ navigator } title='signUpScreen' />
      case 'forgotPassScreen':
      return <ForgotPasswordScreen navigator={ navigator } title='forgotPassScreen' />
      case 'myBoards':
      return <MyBoards user={ this.state.user } navigator={ navigator } title='myBoards' />
    }
  }

  render() {
    if(this.state.isLoading) {
      return <View style={ styles.appContainer }><Text>loading...</Text></View>
    } else if(this.state.user && !this.state.isLoading) {
      return (<View style={ styles.appContainer }>
        <Navigator
          initialRoute={{ id: 'myBoards' }}
          renderScene={ this.renderScene }
        />
      </View>)
    } else {
      return ( <View style={ styles.appContainer }>
        <Navigator
          initialRoute={{ id: 'signInScreen' }}
          renderScene={ this.renderScene }
        />
      </View>)
    }
  }
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})

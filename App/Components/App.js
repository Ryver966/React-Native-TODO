import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import { observer } from 'mobx-react';

import SignInScreen from './SignInScreen/SignInScreen';
import SignUpScreen from './SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen/ForgotPasswordScreen';
import MyBoards from './MyBoards/MyBoards';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import TaskList from './TaskList/TaskList';

@observer
class App extends Component{

  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);

    this.state = {
      isLoading: false
    }
  }

  renderScene(route, navigator) {
    switch(route.id){
      case 'signInScreen':
      return <SignInScreen store={ this.props.store } navigator={ navigator } title='signInScreen' />
      case 'signUpScreen':
      return <SignUpScreen navigator={ navigator } title='signUpScreen' />
      case 'forgotPassScreen':
      return <ForgotPasswordScreen navigator={ navigator } title='forgotPassScreen' />
      case 'myBoards':
      return <MyBoards store={ this.props.store } navigator={ navigator } title='myBoards' />
      case 'taskList':
      return <TaskList store={ this.props.store } navigator={ navigator } title='taskList' />
    }
  }

  render() {
    if(this.props.store.isLoading) {
      return <LoadingScreen />
    } else if(this.props.store.user && !this.props.store.isLoading) {
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

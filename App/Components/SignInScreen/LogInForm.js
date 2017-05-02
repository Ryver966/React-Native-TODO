import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

class LogInForm extends Component {

  constructor(props) {
    super(props);

    this.routeScreen = this.routeScreen.bind(this);
  }

  routeScreen(target) {
    this.props.navigator.push({
      name: target
    })
  }

  render() {
    return(
      <View style={ styles.container }>
        <TextInput
          style={ styles.input }
          underlineColorAndroid='transparent'
          placeholder='E-mail'
        />
        <TextInput
          style={ styles.input }
          underlineColorAndroid='transparent'
          placeholder='Password'
          secureTextEntry
        />
        <View style={ styles.btnContainer }>
          <TouchableOpacity 
            style={ styles.btn }
            onPress={ this.props.navigator.push({ id: 'myBoards' }) }
            >
            <Text style={ styles.btnTxt }>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.props.navigator.push({ id: 'signUpScreen' }) }>
            <Text style={ styles.logInFormBtnTxt }>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.props.navigator.push({ id:'forgotPassScreen' }) }>
            <Text style={ styles.logInFormBtnTxt }>FORGOT PASSWORD?</Text>
          </TouchableOpacity>
        </View>
    </View>
    )
  }
}

export default LogInForm;

const styles = StyleSheet.create({
  container: {
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 10,
  },
  btnContainer: {
  },
  btn: {
    backgroundColor: '#0052cc',
    height: 40,
    paddingVertical: 10,
    marginBottom: 5
  },
  btnTxt: {
    textAlign: 'center',
    color: '#fff'
  },
  logInFormBtnTxt: {
    fontSize: 12,
    color: '#fff'
  }
})
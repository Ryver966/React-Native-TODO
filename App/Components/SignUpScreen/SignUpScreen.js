import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

class SignUpScreen extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.title1 }>Join Us!</Text>
        <TextInput
          style={ styles.input }
          underlineColorAndroid='transparent'
          placeholder='E-mail'
        />
        <TextInput
          style={ styles.input }
          underlineColorAndroid='transparent'
          placeholder='Name'
        />
        <TextInput
          style={ styles.input }
          underlineColorAndroid='transparent'
          placeholder='Password'
          secureTextEntry
        />
        <TextInput
          style={ styles.input }
          underlineColorAndroid='transparent'
          placeholder='Confirm password'
          secureTextEntry
        />
        <TouchableOpacity style={ styles.btn }>
          <Text style={ styles.btnTxt }>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => this.props.navigator.push({ id: 'signInScreen' }) }>
          <Text style={ styles.logInFormBtnTxt }>HAVE AN ALREADY ACCOUNT?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1E90FF',
    padding: 20
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 10,
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
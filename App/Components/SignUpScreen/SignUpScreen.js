import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import { firebaseSignUp } from '../../mobX/Actions';

class SignUpScreen extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.signUp = this.signUp.bind(this);

    this.state = {
      email: null,
      password: null,
      confPassword: null
    }
  }

  signUp(email, password, confPassword) {
    if(email && password && confPassword && password === confPassword) {
      firebaseSignUp(email, password)
        .then(() => {
        this.props.navigator.push({ id: 'myBoards' })
      })
      .catch((error) => {
        console.warn(error.message);
      })
    } else {
      console.warn('Check all fields')
    }
  }

  onChange(fieldName, value) {
    this.setState({ [fieldName]: value })
  }

  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.title1 }>Join Us!</Text>
        <TextInput
          style={ styles.input }
          underlineColorAndroid='transparent'
          placeholder='E-mail'
          onChange={ (e) => this.onChange('email', e.nativeEvent.text) }
        />
        <TextInput
          style={ styles.input }
          underlineColorAndroid='transparent'
          placeholder='Password'
          secureTextEntry
          onChange={ (e) => this.onChange('password', e.nativeEvent.text) }
        />
        <TextInput
          style={ styles.input }
          underlineColorAndroid='transparent'
          placeholder='Confirm password'
          secureTextEntry
          onChange={ (e) => this.onChange('confPassword', e.nativeEvent.text) }
        />
        <TouchableOpacity style={ styles.btn } onPress={ () => this.signUp(this.state.email, this.state.password, this.state.confPassword) }>
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
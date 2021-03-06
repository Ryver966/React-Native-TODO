import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import { firebaseSignIn } from '../../Actions/Actions';
import { observer } from 'mobx-react';

import Spinner from 'react-native-loading-spinner-overlay'

@observer
class LogInForm extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.signIn = this.signIn.bind(this);

    this.state = {
      email: null,
      password: null,
      localLoading: false
    }
  }

  signIn(email, password) {
    this.setState({ localLoading: true })
    if(email && password) {
      firebaseSignIn(email, password)
        .then(() => {
          this.props.navigator.replace({ id: 'myBoards' })
          this.setState({ localLoading: false })
        })
        .catch((error) => {
          console.warn(error.message);
          tthis.setState({ localLoading: false })
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
        <View style={ styles.btnContainer }>
          <TouchableOpacity 
            style={ styles.btn }
            onPress={ () => this.signIn(this.state.email, this.state.password) }
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
        <Spinner visible={ this.state.localLoading ? true : false } color='#2980b9' size='large' />
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
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import LogInForm from './LogInForm';

class SignInScreen extends Component {

  render() {
    return(
      <View style={ styles.signInContainer }>
        <View style={ styles.logo }>
          <Text style={ styles.title1 }>Organizer App</Text>
        </View>
        <View stye={ styles.signInForm }>
          <LogInForm 
            navigator={ this.props.navigator } 
            user={ this.props.user }
          />
        </View>
      </View>
    )
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  signInContainer: {
    backgroundColor: '#2980b9',
    flex: 1,
    padding: 20,
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: -50,
  },
  logo: {
    flex: 1,
    justifyContent: 'center'
  },
  signInForm: {
    
  }
})
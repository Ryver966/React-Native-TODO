import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import { firebaseSignOut } from '../../Actions/Actions';

class UserPanelBelt extends Component {

  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    firebaseSignOut()
    .then(() => {
      this.props.navigator.replace({ id: 'signInScreen' })
    })
    .catch((error) => {
      console.warn(error.message)
    })
  }

  render() {
    return(
      <View style={ styles.container }>
        <TouchableOpacity
          style={ styles.btn }
          onPress={ this.signOut }
        >
          <Text style={ styles.btnTxt }>SIGN OUT</Text>
        </TouchableOpacity>
        <Text style={ styles.appTitle }>Organizer</Text>
      </View>
    )
  }
}

export default UserPanelBelt;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#2980b9',
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginLeft: -20,
    marginTop: -20,
    marginRight: -20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  btn: {
    height: 30,
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10
  },
  btnTxt: {
    textAlign: 'center'
  },
  appTitle: {
    textAlign: 'center',
    flex: 1,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff'
  }
})
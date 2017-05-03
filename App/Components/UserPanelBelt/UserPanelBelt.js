import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import { firebaseSignOut } from '../../mobX/Actions';

class UserPanelBelt extends Component {

  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    firebaseSignOut()
    .then(() => {
      this.props.navigator.push({ id: 'signInScreen' })
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
      </View>
    )
  }
}

export default UserPanelBelt;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#B8B8B8',
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginLeft: -20,
    marginTop: -20,
    marginRight: -20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  btn: {
    height: 30,
    paddingVertical: 10,
    marginBottom: 5
  },
  btnTxt: {
    textAlign: 'center',
    color: '#fff'
  },
})
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

import Board from './Board';

class MyBoards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Random User Name'
      }
    }
  }

  render() {

    const board = {
      name: 'Test board',
      boardOwner: this.state.user.name,
      tasks: [
        { task: 'task 1' },
        { task: 'task 2' },
        { task: 'task 3' },
        { task: 'task 4' }
      ]
    }

    return(
      <View style={ styles.container }>
        <Text style={ styles.title1 }>{ `Hello ${ this.state.user.name }!` }</Text>
        <View style={ styles.addBoardContainer }>
          <TextInput
            underlineColorAndroid='transparent'
            style={ styles.addBoardField }
            placeholder="New Board's Name"
          />
          <TouchableOpacity style={ styles.addBoardBtn }>
            <Text style={ styles.btnTxt }>ADD</Text>
          </TouchableOpacity>
        </View>
        <Board board={ board } />
      </View>
    )
  }
}

export default MyBoards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#778899',
    padding: 20
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30
  },
  btnTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  addBoardContainer: {
    flexDirection: 'row'
  },
  addBoardField: {
    flex: 0.8,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  addBoardBtn: {
    backgroundColor: '#32CD32',
    height: 40,
    flex: 0.2,
    paddingTop: 2.5
  }
})

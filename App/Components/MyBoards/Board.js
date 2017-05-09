import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

class Board extends Component{
  render() {
    return(
      <TouchableOpacity 
        key={ this.props.board.id }
        style={ styles.boardBtn }
      >
        <Text style={ styles.boardName }>{ this.props.board.name }</Text>
        <TouchableOpacity 
          style={ styles.deleteBtn }
          onPress={ () => this.props.deleteBoard(this.props.board.name) }
        >
          <Text style={ styles.btnTxt }>X</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
}

export default Board;

const styles = StyleSheet.create({
  boardBtn: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 50,
    marginBottom: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: '#2980b9',
    borderRadius: 10
  },
  boardName: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#2980b9'
  },
  deleteBtn: {
    marginTop: -2.5
  },
  btnTxt: {
    fontSize: 20
  }
})
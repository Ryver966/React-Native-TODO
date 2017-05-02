import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

class Board extends Component{
  render() {
    return(
      <View style={ styles.boardBtn }>
        <Text style={ styles.boardName }>{ this.props.board.name }</Text>
        <Text style={ styles.tasksCount }>{ this.props.board.tasks.length }</Text>
      </View>
    )
  }
}

export default Board;

const styles = StyleSheet.create({
  boardBtn: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 50,
    marginTop: 20,
    padding: 13,
    borderWidth: 2,
    borderColor: '#DAA520',
    borderRadius: 10,
  },
  boardName: {
    flex: 0.9,
  },
  tasksCount: {
    flex: 0.1,
  }
})
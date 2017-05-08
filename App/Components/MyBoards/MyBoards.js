import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { firebaseAddNewBoard } from '../../mobX/Actions';
import { firebaseDisplayBoards } from '../../mobX/Actions';

import Board from './Board';
import UserPanelBelt from '../UserPanelBelt/UserPanelBelt';

class MyBoards extends Component {

  constructor(props) {
    super(props);

    this.addBoard = this.addBoard.bind(this);

    this.state = {
      boardName: null,
      boards: []
    }
  }

  componentDidMount() {
    firebaseDisplayBoards(this.props.user.uid).on('child_added', (snap) => {
      const newArray = this.state.boards.slice();
      newArray.push(snap.val());
      this.setState({ boards: newArray })
    })
  }

  addBoard(userUid, boardName) {
    if(this.state.boardName) {
      firebaseAddNewBoard(userUid, boardName);
      this.setState({
        boardName: null
      })
    } else {
      console.warn('Enter board name!')
    }
  }

  render() {
    
    const boards = this.state.boards.map((board) => 
      <Board board={ board } />
    )

    return(
      <ScrollView style={ styles.container }>
        <UserPanelBelt navigator={ this.props.navigator } />
        <Text style={ styles.title1 }>Hello!</Text>
        <View style={ styles.addBoardContainer }>
          <TextInput
            underlineColorAndroid='transparent'
            style={ styles.addBoardField }
            placeholder="New Board's Name"
            onChange={ (e) => this.setState({ boardName: e.nativeEvent.text }) }
            value={ this.state.boardName }
          />
          <TouchableOpacity style={ styles.addBoardBtn } onPress={ () => this.addBoard(this.props.user.uid, this.state.boardName) }>
            <Text style={ styles.btnTxt }>ADD</Text>
          </TouchableOpacity>
        </View>
        { boards }
      </ScrollView>
    )
  }
}

export default MyBoards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#778899',
    padding: 20
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20
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

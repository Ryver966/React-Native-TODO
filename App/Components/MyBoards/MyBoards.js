import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { 
  firebaseDisplayBoards, 
  firebaseAuth,
  firebaseGetBoard 
} from '../../Actions/Actions';
import { observer } from 'mobx-react';

import Board from './Board';
import UserPanelBelt from '../UserPanelBelt/UserPanelBelt';

@observer
class MyBoards extends Component {

  constructor(props) {
    super(props);

    this.addBoard = this.addBoard.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);

    this.state = {
      boardName: null,
      boards: []
    }
  }


  deleteBoard(boardName) {
    this.setState({ boards: [] })
    firebaseGetBoard(this.props.store.user.uid, boardName).set({});
    this.props.store.setBoards(this.props.store.user.uid);
  }

  addBoard(boardName) {
    if(this.state.boardName) {
      firebaseGetBoard(this.props.store.user.uid, boardName).set({
        name: boardName,
        id: Date.now()
      });
      this.setState({
        boardName: null
      })
     this.props.store.setBoards(this.props.store.user.uid)
    } else {
      console.warn('Enter board name!')
    }
  }

  render() {
    const boards = this.props.store.boards.map((board, index) => 
      <Board 
        board={ board } 
        key={ index } 
        deleteBoard={ this.deleteBoard }
        navigator={ this.props.navigator }
        store={ this.props.store }
      />
    )

    return(
      <View style={ styles.container }>
        <UserPanelBelt 
          navigator={ this.props.navigator }
          title={ 'Organizer' } 
        />
        <View style={ styles.addBoardContainer }>
          <TextInput
            underlineColorAndroid='transparent'
            style={ styles.addBoardField }
            placeholder="New Board's Name"
            onChange={ (e) => this.setState({ boardName: e.nativeEvent.text }) }
            value={ this.state.boardName }
          />
          <TouchableOpacity 
            style={ styles.addBoardBtn } 
            onPress={ () => this.addBoard(this.state.boardName) }
          >
            <Text style={ styles.btnTxt }>ADD</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          { boards }
        </ScrollView>
      </View>
    )
  }
}

export default MyBoards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899',
    padding: 20
  },
  btnTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  addBoardContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 20
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
  },
})

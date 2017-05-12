import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { observer } from 'mobx-react';
import { firebaseGetTask } from '../../Actions/Actions';

@observer
class Task extends Component{

  constructor(props) {
    super(props);

    this.setTaskState = this.setTaskState.bind(this);

  }

  setTaskState() {
    firebaseGetTask(this.props.store.user.uid, this.props.store.selectedBoard, this.props.task.name).set({
      name: this.props.task.name,
      completed: !this.props.task.completed
    })
    this.props.store.setTasks(this.props.store.user.uid);
  }

  render() {
    return(
      <TouchableOpacity 
        style={ [styles.taskContainer, { backgroundColor: this.props.task.completed ? '#54BE06' : '#fff' }] }
        onPress={ () => this.setTaskState() }
      >
        <Text style={ styles.taskName }>{ this.props.task.name }</Text>
        <TouchableOpacity 
          style={ styles.deleteBtn }
          onPress={ () => this.props.deleteTask(this.props.task.name) }
        >
          <Text style={ styles.btnTxt }>X</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
}

export default Task;

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: '#2980b9',
    borderRadius: 10
  },
  taskName: {
    flex: 1,
    textAlign: 'left',
    fontSize: 20
  },
  deleteBtn: {
    marginTop: -2.5
  },
  btnTxt: {
    fontSize: 20
  }
})
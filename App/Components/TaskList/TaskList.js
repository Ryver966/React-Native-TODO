import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { firebaseGetTask } from '../../Actions/Actions';
import { observer } from 'mobx-react';

import UserPanelBelt from '../UserPanelBelt/UserPanelBelt';
import Task from './Task';

@observer
class TaskList extends Component {

  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    this.state = {
      taskName: null
    }
  }

  deleteTask(taskName) {
    firebaseGetTask(this.props.store.user.uid, this.props.store.selectedBoard, taskName).set({})
    this.props.store.setTasks(this.props.store.user.uid)
  }

  addTask(taskName) {
    firebaseGetTask(this.props.store.user.uid, this.props.store.selectedBoard, taskName).set({
      name: taskName,
      completed: false
    })
    this.setState({ taskName: null })
    this.props.store.setTasks(this.props.store.user.uid)
  }

  componentWillMount() {
    this.props.store.setTasks(this.props.store.user.uid);
    console.log(this.props.store.tasks)
  }

  render() {

    const tasks = this.props.store.tasks.map((task, index) =>
      <Task 
        task={ task } 
        key={ index } 
        deleteTask={ this.deleteTask }
        store={ this.props.store }
      />
    )

    return(
      <View style={ styles.container }>
        <UserPanelBelt 
          navigator={ this.props.navigator }
          title={ this.props.store.selectedBoard }
        />
        <View style={ styles.addTaskContainer }>
          <TextInput
            underlineColorAndroid='transparent'
            style={ styles.addTaskField }
            placeholder="New Task Name"
            onChange={ (e) => this.setState({ taskName: e.nativeEvent.text }) }
            value={ this.state.taskName }
          />
          <TouchableOpacity 
            style={ styles.addTaskBtn } 
            onPress={ () => this.addTask(this.state.taskName) }
          >
            <Text style={ styles.btnTxt }>ADD</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          { tasks }
        </ScrollView>
      </View>
    )
  }
}

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#778899'
  },
  addTaskContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 20
  },
  addTaskField: {
    flex: 0.8,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  addTaskBtn: {
    backgroundColor: '#32CD32',
    height: 40,
    flex: 0.2,
    paddingTop: 2.5
  },
  btnTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
})
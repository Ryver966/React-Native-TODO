import { 
  autorun, 
  observable 
} from 'mobx';
import { 
  firebaseAuth, 
  firebaseDisplayBoards,
  firebaseDisplayTasks 
} from '../Actions/Actions'

export class Store {  
  @observable user = null
  @observable isLoading = true
  @observable boards = []
  @observable selectedBoard = null
  @observable tasks = []

  setBoards(uid) {
    this.boards = []
    firebaseDisplayBoards(uid).on('child_added', (snap) => {
      const array = this.boards.slice()
      array.push(snap.val())
      this.boards = array
    })
  }

  setSelectedBoard(boardName) {
    this.selectedBoard = boardName
  }

  setTasks(uid) {
    this.tasks = []
    firebaseDisplayTasks(uid, this.selectedBoard).on('child_added', (snap) => {
      const array = this.tasks.slice()
      array.push(snap.val())
      this.tasks = array
    })
  }

  setLoading() {
    this.isLoading = !this.isLoading
  }
}

const store = new Store

export default store;

firebaseAuth.onAuthStateChanged((user) => {
  if(user) {
    store.user = user
   store.isLoading = false
    store.setBoards(user.uid)
  } else {
    store.isLoading = false
  }
})

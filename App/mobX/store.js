import { 
  autorun, 
  observable 
} from 'mobx';
import { 
  firebaseAuth, 
  firebaseDisplayBoards 
} from '../Actions/Actions'

export class Store {  
  @observable user = null
  @observable isLoading = true
  @observable boards = []

  setBoards(uid) {
    this.boards = []
    firebaseDisplayBoards(uid).on('child_added', (snap) => {
      const array = this.boards.slice()
      array.push(snap.val())
      this.boards = array
    })
  }
}

const store = new Store

export default store;

autorun(() => {
  console.log(store.user)
  console.log(store.boards.length)
})

firebaseAuth.onAuthStateChanged((user) => {
  if(user) {
    store.user = user
    store.isLoading = false
    store.setBoards(user.uid)
  } else {
    store.isLoading = false
  }
})

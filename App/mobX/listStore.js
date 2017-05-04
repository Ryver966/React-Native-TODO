import { observable } from 'mobx';

class Store {
  @observable boards = ['test board', 'test board 1']
}

const store = window.store = new Store;

export default store;

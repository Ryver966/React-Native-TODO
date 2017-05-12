import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCv98CS9FvLycomT8j6F3yS1tIJNWK9opU",
  authDomain: "reactnativetodo-4cef8.firebaseapp.com",
  databaseURL: "https://reactnativetodo-4cef8.firebaseio.com",
  projectId: "reactnativetodo-4cef8",
  storageBucket: "reactnativetodo-4cef8.appspot.com",
  messagingSenderId: "714383107131"
};
firebase.initializeApp(config);

export function firebaseSignUp(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export function firebaseSignIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function firebaseSignOut() {
  return firebase.auth().signOut()
}

export function firebaseResetPassword(emailAdress) {
  return firebase.auth().sendPasswordResetEmail(emailAdress)
}

export function firebaseAddNewBoard(userUid, boardName) {
  firebase.database().ref(`Users/${ userUid }/boards/${ boardName }`).set({
    name: boardName,
    id: Date.now()
  })
}

export function firebaseDisplayBoards(userUid) {
  return firebase.database().ref(`Users/${ userUid }/boards`)
}

export const firebaseAuth = firebase.auth()

export function firebaseGetBoard(userUid, boardName) {
  return firebase.database().ref(`Users/${ userUid }/boards/${ boardName }`)
}

export function firebaseDisplayTasks(userUid, boardName) {
  return firebase.database().ref(`Users/${ userUid }/boards/${ boardName }/tasks`)
}

export function firebaseGetTask(userUid, boardName, taskName) {
  return firebase.database().ref(`Users/${ userUid }/boards/${ boardName }/tasks/${ taskName }`)
}
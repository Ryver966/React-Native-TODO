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
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByWPGBm1fo4KlpgxkrlagJ-wBMA_NRJjg",
  authDomain: "css-stash.firebaseapp.com",
  projectId: "css-stash",
  storageBucket: "css-stash.appspot.com",
  messagingSenderId: "839779315305",
  appId: "1:839779315305:web:019b5218299ea01d167cf8"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth }
import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyD_40AtTNVPukaN7-V87KWLV8hp37Al0h4",
    authDomain: "sistema-9c797.firebaseapp.com",
    projectId: "sistema-9c797",
    storageBucket: "sistema-9c797.appspot.com",
    messagingSenderId: "967466475333",
    appId: "1:967466475333:web:8454f9a0367d95cf76e82c"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;
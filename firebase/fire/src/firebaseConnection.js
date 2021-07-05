import firebase from 'firebase/app';
import 'firebase/firestore'


let firebaseConfig = {
    apiKey: "AIzaSyCJInfZRj23zicTvg_3G7DId-WX-UMh0WA",
    authDomain: "cursoreact-c46e3.firebaseapp.com",
    projectId: "cursoreact-c46e3",
    storageBucket: "cursoreact-c46e3.appspot.com",
    messagingSenderId: "195712661309",
    appId: "1:195712661309:web:e4ef54a78fcc314df3f754"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
 export default firebase
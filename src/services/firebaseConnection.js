
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPxK1x4AqNpMIiBW3FTvdd5tIXd_xzEj8",
  authDomain: "sistema-309d8.firebaseapp.com",
  projectId: "sistema-309d8",
  storageBucket: "sistema-309d8.appspot.com",
  messagingSenderId: "537225907929",
  appId: "1:537225907929:web:cc6c53643dc92100dcb8c8",
  measurementId: "G-10Q4Q0WZ78"
};
  
  // Initialize Firebase
  if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
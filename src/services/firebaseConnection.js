import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyA1ssC-LrdLz-IHxAoTjRMYG1FQAaMtToY",
    authDomain: "sistema-cadastro-a586a.firebaseapp.com",
    projectId: "sistema-cadastro-a586a",
    storageBucket: "sistema-cadastro-a586a.appspot.com",
    messagingSenderId: "681118474123",
    appId: "1:681118474123:web:491542fd2869e3d4ef598e",
    measurementId: "G-LCZJS3DJ49"
  };
  if(!firebase.apps.length){

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  }
  export default firebase;

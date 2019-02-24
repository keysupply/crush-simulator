 import firebase, { firestore } from 'firebase';

  var config = {
    apiKey: "AIzaSyBs3p134_6PttmesmKSG8wrz8oP2jmoznM",
    authDomain: "crush-simulator.firebaseapp.com",
    databaseURL: "https://crush-simulator.firebaseio.com",
    projectId: "crush-simulator",
    storageBucket: "crush-simulator.appspot.com",
    messagingSenderId: "471525815979"
  };
  
  firebase.initializeApp(config);

  export default firestore;
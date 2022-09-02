import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArQg-Z7EHD8GUOYYa9VFlAuauycUm83bM",
    authDomain: "portfolio-nagasurya.firebaseapp.com",
    projectId: "portfolio-nagasurya",
    storageBucket: "portfolio-nagasurya.appspot.com",
    messagingSenderId: "986044822259",
    appId: "1:986044822259:web:5093578eed45e46bf07d86",
    measurementId: "G-6TJDM8VC0E"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export { db};
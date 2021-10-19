import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyDl9JOkt1lhYT683diJL0uUxRmnVzTXTUc",
    authDomain: "netflix-b532c.firebaseapp.com",
    projectId: "netflix-b532c",
    storageBucket: "netflix-b532c.appspot.com",
    messagingSenderId: "453365941479",
    appId: "1:453365941479:web:644b2293965d1c266e4e42"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebase.auth();

  export {auth};
  export default db;
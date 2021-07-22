import firebase from "firebase";
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyD2NWcoLXzdjXQ8DZBt4GfUp5qRzwZOVcM",
    authDomain: "twitter-clone-e363e.firebaseapp.com",
    projectId: "twitter-clone-e363e",
    storageBucket: "twitter-clone-e363e.appspot.com",
    messagingSenderId: "788633866304",
    appId: "1:788633866304:web:eeb2854d35029b31020fa5",
    measurementId: "G-9CXXY21E8F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();
  export default db;
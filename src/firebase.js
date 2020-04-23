import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCv2Rh88a8YshIP81tfHu8OfaqWTioKPRk",
  authDomain: "react-slack-clone-7b265.firebaseapp.com",
  databaseURL: "https://react-slack-clone-7b265.firebaseio.com",
  projectId: "react-slack-clone-7b265",
  storageBucket: "react-slack-clone-7b265.appspot.com",
  messagingSenderId: "289515100388",
  appId: "1:289515100388:web:f3317214cd51dcf011f4f1",
  measurementId: "G-5EFCYX52T1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

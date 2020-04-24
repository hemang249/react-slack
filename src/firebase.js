import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import {
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_KEY,
  FIREBASE_STORAGE_URL,
} from "./config";

var firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: "react-slack-clone-7b265",
  storageBucket: FIREBASE_STORAGE_URL,
  messagingSenderId: "289515100388",
  appId: FIREBASE_APP_ID,
  measurementId: "G-5EFCYX52T1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoa-FTiy_VYFCMzU03nZCmdsoIlczbhJ4",
  authDomain: "typing-speed-7abb0.firebaseapp.com",
  projectId: "typing-speed-7abb0",
  storageBucket: "typing-speed-7abb0.appspot.com",
  messagingSenderId: "450003106743",
  appId: "1:450003106743:web:57bacb466b7604098ac632",
  measurementId: "G-RW9JJSDY8N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };

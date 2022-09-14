// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//npm config set legacy-peer-deps true
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsV7sip0RymMMrHqs65uO_kKzeQb2r08Q",
  authDomain: "awani--clone.firebaseapp.com",
  projectId: "awani--clone",
  storageBucket: "awani--clone.appspot.com",
  messagingSenderId: "122195465158",
  appId: "1:122195465158:web:46d313fd299bfdd235d8c7",
  measurementId: "G-3F88PHEFT8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

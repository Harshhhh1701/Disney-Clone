import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_SECRET_NAME,
  authDomain: "disney-e287b.firebaseapp.com",
  projectId: "disney-e287b",
  storageBucket: "disney-e287b.appspot.com",
  messagingSenderId: "750731086024",
  appId: "1:750731086024:web:b5b3bd9ce23a94479a7dfd",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

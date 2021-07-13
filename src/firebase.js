import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZaT1lWhDe4sN2E9ZT9CO25QhhGVr3D70",
  authDomain: "netflix-clone-e75b1.firebaseapp.com",
  projectId: "netflix-clone-e75b1",
  storageBucket: "netflix-clone-e75b1.appspot.com",
  messagingSenderId: "174973025336",
  appId: "1:174973025336:web:ee89c134dfb429ee54facd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;


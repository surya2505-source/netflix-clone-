import firebase from 'firebase'



const firebaseConfig = {
  apiKey: "AIzaSyAqGSHjk6ORJhYwgAXpb6pCAFTlX-Gxv5Y",
  authDomain: "netflix-clone-16401.firebaseapp.com",
  projectId: "netflix-clone-16401",
  storageBucket: "netflix-clone-16401.appspot.com",
  messagingSenderId: "73640790719",
  appId: "1:73640790719:web:d06413483b1f778e08d40a",
  measurementId: "G-7F2V05HL47"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
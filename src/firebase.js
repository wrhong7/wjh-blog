// src/firebase.js
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCY_j72ZpjoOmRxE2irphBpLUsLlarWyjA",
  authDomain: "won-jun-hong-website.firebaseapp.com",
  databaseURL: "https://won-jun-hong-website.firebaseio.com",
  projectId: "won-jun-hong-website",
  storageBucket: "",
  messagingSenderId: "196476961483"
};
firebase.initializeApp(config);

export default firebase;


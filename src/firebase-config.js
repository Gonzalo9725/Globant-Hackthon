import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGjcdbPVD-3T3147LKuNLEfzqwljgo4FQ",
    authDomain: "globant-hackathon.firebaseapp.com",
    databaseURL: "https://globant-hackathon.firebaseio.com",
    projectId: "globant-hackathon",
    storageBucket: "globant-hackathon.appspot.com",
    messagingSenderId: "842963676589",
    appId: "1:842963676589:web:fa2c2eac501485d6384524"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); 
const auth = firebase.auth();
export { db, firebase, auth };
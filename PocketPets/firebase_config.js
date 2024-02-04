// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2B4O8GojJ1w-Gu5wwBZgKSsXUIDzTUjQ",
  authDomain: "pocketpets-67544.firebaseapp.com",
  projectId: "pocketpets-67544",
  storageBucket: "pocketpets-67544.appspot.com",
  messagingSenderId: "387015661344",
  appId: "1:387015661344:web:d6ab4fcf458a5d089c6945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {app, db};
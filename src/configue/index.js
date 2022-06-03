// Import the functions you need from the SDKs you need
// import { initializeApp, } from "firebase/app";
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrQ85uskUNnFloXonmTJ0Tpoe9fngBKEE",
  authDomain: "clinicminneapolishealth-5e237.firebaseapp.com",
  databaseURL: "https://clinicminneapolishealth-5e237-default-rtdb.firebaseio.com",
  projectId: "clinicminneapolishealth-5e237",
  storageBucket: "clinicminneapolishealth-5e237.appspot.com",
  messagingSenderId: "1027194873714",
  appId: "1:1027194873714:web:d1adaef4567a6523e61feb",
  measurementId: "G-K9M97GYW5K"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export default app
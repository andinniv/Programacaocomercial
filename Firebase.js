// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4hP1jcEuUIz7fcM7PNasbEHdyOZ9GuvQ",
  authDomain: "restaurante-30900.firebaseapp.com",
  projectId: "restaurante-30900",
  storageBucket: "restaurante-30900.appspot.com",
  messagingSenderId: "895393025889",
  appId: "1:895393025889:web:4b3bc7b729ef284c86ff20",
  measurementId: "G-1VCTQK3XC6"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  synchronizeTabs: true,
  ignoreUndefinedProperties: true,
  experimentalForceLongPolling: true,
});


export default db;



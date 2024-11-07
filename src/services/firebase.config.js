// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const config = {
  apiKey: "AIzaSyCqHNVA7g1tyDPcy1NUkb1EYsWoWMT-Cwk",
  authDomain: "todo-acb34.firebaseapp.com",
  projectId: "todo-acb34",
  storageBucket: "todo-acb34.appspot.com",
  messagingSenderId: "207531098402",
  appId: "1:207531098402:web:e587f71c41cf3c16ea657b"
};

// Initialize Firebase
const app = initializeApp(config);
export const db = getFirestore(app);

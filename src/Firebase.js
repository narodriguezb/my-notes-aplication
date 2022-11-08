// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVbMn7cElw83nmc4CXOXKmphRplfcegts",
  authDomain: "my-notes-aplication.firebaseapp.com",
  projectId: "my-notes-aplication",
  storageBucket: "my-notes-aplication.appspot.com",
  messagingSenderId: "535839336725",
  appId: "1:535839336725:web:15afadf9cadb8ace18211c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider, EmailAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZZvsuWrA3Ql376qFsrVM1JfCKgHsIZHk",
  authDomain: "mystore-e2628.firebaseapp.com",
  projectId: "mystore-e2628",
  storageBucket: "mystore-e2628.appspot.com",
  messagingSenderId: "604514168553",
  appId: "1:604514168553:web:4b278d7c487064b07c4a78",
  measurementId: "G-P49RB1Q30R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const emailProvider = new EmailAuthProvider();


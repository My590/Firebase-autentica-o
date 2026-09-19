// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIeu1MwK6rZNDgr5WGPJJe7LN4HuVidJM",
  authDomain: "atividade-firebase-f2f65.firebaseapp.com",
  projectId: "atividade-firebase-f2f65",
  storageBucket: "atividade-firebase-f2f65.firebasestorage.app",
  messagingSenderId: "659293298584",
  appId: "1:659293298584:web:ff278ecf832f44d29495ed",
  measurementId: "G-54Y6NBJRH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
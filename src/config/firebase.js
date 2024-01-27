// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA4EXemUSdSCP6Ud9q9VFaJjtgGfWlq_gU",
  authDomain: "completefirebaseproject-e8fd6.firebaseapp.com",
  projectId: "completefirebaseproject-e8fd6",
  storageBucket: "completefirebaseproject-e8fd6.appspot.com",
  messagingSenderId: "441171949951",
  appId: "1:441171949951:web:4dbbef9f542ea08403c24a",
  measurementId: "G-04SMJG3MK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

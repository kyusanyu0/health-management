import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2mBB6j9beBZUjIX7ZWsQ9ZUo0bLk6hTk",
  authDomain: "login-483e4.firebaseapp.com",
  projectId: "login-483e4",
  storageBucket: "login-483e4.appspot.com",
  messagingSenderId: "469664990501",
  appId: "1:469664990501:web:658e15ac72958ab21806cc",
  measurementId: "G-HKG5HZTKPD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider};
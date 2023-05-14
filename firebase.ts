// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHPM5MhTM4rim2kduKtN-73MDASMOxuOM",
  authDomain: "netflix-clone-ab13d.firebaseapp.com",
  projectId: "netflix-clone-ab13d",
  storageBucket: "netflix-clone-ab13d.appspot.com",
  messagingSenderId: "272538003093",
  appId: "1:272538003093:web:bff0d319261b83c86fdd9c",
  measurementId: "G-J6NP4E2E3H",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };

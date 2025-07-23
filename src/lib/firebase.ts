// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLTH9OtNobuRZLPKP-4DoBAmuACdccQOQ",
  authDomain: "aquarusauth.firebaseapp.com",
  projectId: "aquarusauth",
  storageBucket: "aquarusauth.firebasestorage.app",
  messagingSenderId: "565877905272",
  appId: "1:565877905272:web:379a0c28a5f4cf5fc39a8d",
  measurementId: "G-BCXHWLWG9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
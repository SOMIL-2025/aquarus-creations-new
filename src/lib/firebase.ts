// src/lib/firebase.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

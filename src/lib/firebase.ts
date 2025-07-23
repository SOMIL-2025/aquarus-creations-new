import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
apiKey: "AIzaSyBLTH9OtNobuRZLPKP-4DoBAmuACdcoC0Q",
authDomain: "aquarusauth.firebaseapp.com",
projectId: "aquarusauth",
storageBucket: "aquarusauth.appspot.com",
messagingSenderId: "565877905272",
appId: "1:565877905272:web:379a0c28af54cff5c39a8d",
measurementId: "G-BCXHWLWG9W",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firebase Analytics (conditionally to avoid SSR issues)
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
isSupported().then((supported) => {
if (supported) {
analytics = getAnalytics(app);
}
});
}

export { app, auth, analytics };


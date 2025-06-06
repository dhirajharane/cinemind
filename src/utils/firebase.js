// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GOOGLE_KEY } from "../hidden";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: GOOGLE_KEY,
  authDomain: "cinemind-web.firebaseapp.com",
  projectId: "cinemind-web",
  storageBucket: "cinemind-web.firebasestorage.app",
  messagingSenderId: "1038849076462",
  appId: "1:1038849076462:web:99a24d2adbef4733f197ff",
  measurementId: "G-EDFRWN6WNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
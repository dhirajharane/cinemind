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
  authDomain: "netflixgpt-2327e.firebaseapp.com",
  projectId: "netflixgpt-2327e",
  storageBucket: "netflixgpt-2327e.firebasestorage.app",
  messagingSenderId: "12789630987",
  appId: "1:12789630987:web:fb48637bcc6fd5e8441f0e",
  measurementId: "G-F9E6CP27D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6noZxcUfwaPNwlRp0rRFXy751GcVCipA",
  authDomain: "netflixgpt-8b455.firebaseapp.com",
  projectId: "netflixgpt-8b455",
  storageBucket: "netflixgpt-8b455.appspot.com",
  messagingSenderId: "758725182270",
  appId: "1:758725182270:web:45e8b4b8a73f348bbfa26f",
  measurementId: "G-X1VQFY4H75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
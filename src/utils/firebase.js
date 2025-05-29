// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlWDz_aSQohgp5zRD_traO9xDfPmUSvrA",
  authDomain: "netflixgpt-a1986.firebaseapp.com",
  projectId: "netflixgpt-a1986",
  storageBucket: "netflixgpt-a1986.firebasestorage.app",
  messagingSenderId: "404293005764",
  appId: "1:404293005764:web:7c27530dafcb5c588bf491",
  measurementId: "G-5J8G3MK6Y0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
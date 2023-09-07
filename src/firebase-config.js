// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8hmacsMAF8ccF1kEs0ThNOGmoE9zKqwQ",
  authDomain: "startup-727ee.firebaseapp.com",
  projectId: "startup-727ee",
  storageBucket: "startup-727ee.appspot.com",
  messagingSenderId: "346900066210",
  appId: "1:346900066210:web:445c2a66379fdf21c54cfb",
  measurementId: "G-6CFGN4CZH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
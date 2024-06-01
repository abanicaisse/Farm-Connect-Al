// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2X6zy6cD3dYhCSM2ipNtXWa3jKle6TeQ",
  authDomain: "farm-connect-8cde2.firebaseapp.com",
  projectId: "farm-connect-8cde2",
  storageBucket: "farm-connect-8cde2.appspot.com",
  messagingSenderId: "264363116727",
  appId: "1:264363116727:web:aab4b1078767f47e5ea532",
  measurementId: "G-C7ELVVPHPE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

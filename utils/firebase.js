// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "my-first-project-blog-407322.firebaseapp.com",
  projectId: "my-first-project-blog-407322",
  storageBucket: "my-first-project-blog-407322.appspot.com",
  messagingSenderId: "1067836819955",
  appId: "1:1067836819955:web:d80a9925c15198f5a22a86",
  measurementId: "G-3ZVGDZKH17",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


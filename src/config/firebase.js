// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABVtWDq69xMVykJ_pWr_QAuP4qvcqp7OI",
  authDomain: "vite-contact-f1dc2.firebaseapp.com",
  projectId: "vite-contact-f1dc2",
  storageBucket: "vite-contact-f1dc2.firebasestorage.app",
  messagingSenderId: "948457943771",
  appId: "1:948457943771:web:975e9ad4310dbf877c12fe",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

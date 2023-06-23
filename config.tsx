// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCM1CAMqd-MAEYh8aKYLPFxkgNMqSEZmc4",
  authDomain: "symptodialog.firebaseapp.com",
  projectId: "symptodialog",
  storageBucket: "symptodialog.appspot.com",
  messagingSenderId: "501206346091",
  appId: "1:501206346091:web:40e28ed3d61d57e577c42e",
  measurementId: "G-EYZDZV38WV"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getDatabase(firebase_app);

export default firebase_app;

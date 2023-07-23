// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn4okW28b9lwouxh5-MLYilAL7e_L-S7s",
  authDomain: "irupe-3a505.firebaseapp.com",
  projectId: "irupe-3a505",
  storageBucket: "irupe-3a505.appspot.com",
  messagingSenderId: "906116749044",
  appId: "1:906116749044:web:8bd71dc3cf78a7d741b0a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
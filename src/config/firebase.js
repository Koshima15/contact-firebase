// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOUYa6Bwj69ztvn8prWjEq00pVBLS1AxQ",
  authDomain: "vite-contact-945a5.firebaseapp.com",
  projectId: "vite-contact-945a5",
  storageBucket: "vite-contact-945a5.firebasestorage.app",
  messagingSenderId: "115279845837",
  appId: "1:115279845837:web:dab16e3a047fb2ab2d0c84"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const db= getFirestore(app);
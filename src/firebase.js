// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5f66hNq_vH7f05YPKU0oJZecJ89Epxs8",
  authDomain: "pkhands-fcf61.firebaseapp.com",
  databaseURL: "https://pkhands-fcf61-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pkhands-fcf61",
  storageBucket: "pkhands-fcf61.appspot.com",
  messagingSenderId: "1036702694811",
  appId: "1:1036702694811:web:541ab9eeee52335304753e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
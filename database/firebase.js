
import { initializeApp } from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAzv_RmWyM5KcgH7dIQ_o5vSRWCGgze5vk",
  authDomain: "pkhand-596f7.firebaseapp.com",
  projectId: "pkhand-596f7",
  storageBucket: "pkhand-596f7.appspot.com",
  messagingSenderId: "859614955216",
  appId: "1:859614955216:web:80fe30e878d74617c580d5",
  measurementId: "G-3VL0033B8W"
};

const firebase = initializeApp(firebaseConfig);
export default firebase;

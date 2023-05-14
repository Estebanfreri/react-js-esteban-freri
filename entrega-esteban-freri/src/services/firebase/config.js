// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUI3m0ROlnM7oMxojQPftIDt7Kfd4K3hk",
  authDomain: "nininashop-19170.firebaseapp.com",
  projectId: "nininashop-19170",
  storageBucket: "nininashop-19170.appspot.com",
  messagingSenderId: "483992558726",
  appId: "1:483992558726:web:4316ea56fa0dd54aac8507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
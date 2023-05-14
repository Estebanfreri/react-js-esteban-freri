// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu-T0JzfceOo2Vg76D325ipoHhd3v4tFY",
  authDomain: "nininashop-3a586.firebaseapp.com",
  projectId: "nininashop-3a586",
  storageBucket: "nininashop-3a586.appspot.com",
  messagingSenderId: "994131581235",
  appId: "1:994131581235:web:fd8d2ad957e0c3351e4646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
//import firebase from 'firebase/app';
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
} from 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB3nHgYbgLe-2Yd63B8-sWuJe5WX-Dt5mk',
  authDomain: 'walmart-172c4.firebaseapp.com',
  projectId: 'walmart-172c4',
  storageBucket: 'walmart-172c4.appspot.com',
  messagingSenderId: '408488100216',
  appId: '1:408488100216:web:ba1ea06c6034039ac0088d',
  measurementId: 'G-78SY8V9XWL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence);

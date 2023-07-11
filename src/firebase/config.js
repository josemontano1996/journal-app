// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBhxxc02YWMJTGt7X3sFc3AwOr3gyRSRJw',
  authDomain: 'react-course-fernando-herrera.firebaseapp.com',
  projectId: 'react-course-fernando-herrera',
  storageBucket: 'react-course-fernando-herrera.appspot.com',
  messagingSenderId: '725012582156',
  appId: '1:725012582156:web:ccee682d1fc595c5efc329',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

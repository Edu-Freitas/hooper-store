// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIbAxCieeyVOjs88oiH1LPNwVFDpFos2k',
  authDomain: 'hooper-s-f2d3c.firebaseapp.com',
  projectId: 'hooper-s-f2d3c',
  storageBucket: 'hooper-s-f2d3c.appspot.com',
  messagingSenderId: '828322098516',
  appId: '1:828322098516:web:97d3cef05d7c9a01b1ecc1'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

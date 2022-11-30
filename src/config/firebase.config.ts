// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCq1kgY_txFqhxR5PqkgwBdDXl66Ty1PI',
  authDomain: 'hooper-store-7561e.firebaseapp.com',
  projectId: 'hooper-store-7561e',
  storageBucket: 'hooper-store-7561e.appspot.com',
  messagingSenderId: '1001025879729',
  appId: '1:1001025879729:web:5c173bfb297497d086ec90'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

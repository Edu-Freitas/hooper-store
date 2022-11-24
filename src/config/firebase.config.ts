// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD-6FX2AOzPWNtm2LfzkYyXxEa2MjeWSk4',
  authDomain: 'hooper-store-dfdee.firebaseapp.com',
  projectId: 'hooper-store-dfdee',
  storageBucket: 'hooper-store-dfdee.appspot.com',
  messagingSenderId: '851406488096',
  appId: '1:851406488096:web:7466f9ae2aeb3cba1e7245'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBRv-_NKohEJRxsWGyXviUDitUBV9StEnQ",
  authDomain: "readinglistapp-3f609.firebaseapp.com",
  projectId: "readinglistapp-3f609",
  storageBucket: "readinglistapp-3f609.appspot.com",
  messagingSenderId: "335643251934",
  appId: "1:335643251934:web:7b6af2db766726b73ede4f"
};

//init firebase app
const app = initializeApp(firebaseConfig)

//init firestore db
const db = getFirestore(app)

//init firebase authentication
const auth = getAuth(app)

export { db, auth }

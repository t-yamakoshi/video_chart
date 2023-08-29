import {initializeApp, getApps } from 'firebase/app'

 src/

import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebasestorage'
import {getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJET_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID
};

initializeApp(firebaseConfig)

export const db = getFirestore()
export const storage = getStorage()
export const auth = getAuth()

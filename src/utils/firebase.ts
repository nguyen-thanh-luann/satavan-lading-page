// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,

  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,

  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,

  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,

  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,

  appId: process.env.NEXT_PUBLIC_APP_ID,
}

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
authentication.useDeviceLanguage();
export const googleProvider = new GoogleAuthProvider();
export const fbProvider = new FacebookAuthProvider();
export const db = getDatabase(app);

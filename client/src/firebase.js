// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "learning-hub-77c66.firebaseapp.com",
  projectId:import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: "learning-hub-77c66.appspot.com",
  messagingSenderId: "113498085319",
  appId:import.meta.env.VITE_FIREBASE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
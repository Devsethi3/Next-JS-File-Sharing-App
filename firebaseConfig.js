// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjn5Ty1cDUUUgDiP_fT8A8BhMgJcfLaL0",
  authDomain: "file-sharing-app-17776.firebaseapp.com",
  projectId: "file-sharing-app-17776",
  storageBucket: "file-sharing-app-17776.appspot.com",
  messagingSenderId: "309600252917",
  appId: "1:309600252917:web:0c889898a2ef387ee1e6bc",
  measurementId: "G-GDS7F4VPPK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
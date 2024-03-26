// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrI9FfSwZi0EFR4f8mx30v622Jkg8xV8g",
  authDomain: "killme-a2b8c.firebaseapp.com",
  projectId: "killme-a2b8c",
  storageBucket: "killme-a2b8c.appspot.com",
  messagingSenderId: "950916838126",
  appId: "1:950916838126:web:e0ce77aecf543211c5b9ff",
  measurementId: "G-CG4ZXCXCC3"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
// const analytics = getAnalytics(firebase);
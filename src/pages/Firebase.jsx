// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjpcAu1VxBgbE7FFuQHyJRL42M-KawE2A",
  authDomain: "auth-16-04-2007.firebaseapp.com",
  projectId: "auth-16-04-2007",
  storageBucket: "auth-16-04-2007.firebasestorage.app",
  messagingSenderId: "362723678660",
  appId: "1:362723678660:web:228c55372e35425350ec91",
  measurementId: "G-T9X055NZM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
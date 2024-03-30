// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuf0pAoivdINLB0oHNP7bvF8Ectf080Pg",
  authDomain: "netflixgpt-ae427.firebaseapp.com",
  projectId: "netflixgpt-ae427",
  storageBucket: "netflixgpt-ae427.appspot.com",
  messagingSenderId: "659856048094",
  appId: "1:659856048094:web:18f6f86b40704ba62fe74f",
  measurementId: "G-HD937YLP3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhWyBUODMxHoXniEklBJOExdG5-5G-25E",
  authDomain: "pantry-keeper.firebaseapp.com",
  projectId: "pantry-keeper",
  storageBucket: "pantry-keeper.appspot.com",
  messagingSenderId: "599557348503",
  appId: "1:599557348503:web:84f2b0ca7a2f41ed6dddd2",
  measurementId: "G-6ZQLK1K8J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
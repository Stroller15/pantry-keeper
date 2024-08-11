import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase configuration object goes here

    apiKey: "AIzaSyA7Hluuk9TaN2lD8zzpTO0G2LXU25BDGdE",
    authDomain: "pantry-keeper-b3a95.firebaseapp.com",
    projectId: "pantry-keeper-b3a95",
    storageBucket: "pantry-keeper-b3a95.appspot.com",
    messagingSenderId: "323470156653",
    appId: "1:323470156653:web:c3faf0f96a8b5fa2e97064",
    measurementId: "G-MCZ4BVMQB1"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyHjTuanIBFWrMcTS6C8fZnr7t_gu0TGw",
    authDomain: "house-marketplace-app-5d533.firebaseapp.com",
    projectId: "house-marketplace-app-5d533",
    storageBucket: "house-marketplace-app-5d533.appspot.com",
    messagingSenderId: "782401880940",
    appId: "1:782401880940:web:ecf9ff66303043d028e949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
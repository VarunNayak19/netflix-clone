// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7LppAxslmQ48LXL1oVgRac5RUs-K4kVY",
    authDomain: "react-netflix-clone-4f7e9.firebaseapp.com",
    projectId: "react-netflix-clone-4f7e9",
    storageBucket: "react-netflix-clone-4f7e9.appspot.com",
    messagingSenderId: "477150418325",
    appId: "1:477150418325:web:b028a68c1d040a030e529c",
    measurementId: "G-Q45F1HNMY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
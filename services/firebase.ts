// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "gerenciadordeativosposuea.firebaseapp.com",
  projectId: "gerenciadordeativosposuea",
  storageBucket: "gerenciadordeativosposuea.appspot.com",
  messagingSenderId: "219479069256",
  appId: "1:219479069256:web:c9f1e43517f2a9f86e7e7d",
  measurementId: "G-RDM1VME4H6"
};

// Initialize Firebase
const firebase = getApps().length == 0 ? initializeApp(firebaseConfig) : getApps()[0]

export default getFirestore(firebase)
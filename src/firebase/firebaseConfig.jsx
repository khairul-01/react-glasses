
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVwENTDi7vDfGdgeYYVFQsy5excXYypms",
  authDomain: "dimple-firebase-10551.firebaseapp.com",
  projectId: "dimple-firebase-10551",
  storageBucket: "dimple-firebase-10551.appspot.com",
  messagingSenderId: "17417525942",
  appId: "1:17417525942:web:67d93762e66c9521afa417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
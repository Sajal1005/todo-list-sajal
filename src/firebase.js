// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN-21Tg2h1JXs9A_0S8IupIKom-kVoyFM",
  authDomain: "todo-app-sajal.firebaseapp.com",
  projectId: "todo-app-sajal",
  storageBucket: "todo-app-sajal.appspot.com",
  messagingSenderId: "359751264351",
  appId: "1:359751264351:web:9a7a83f6d635dc54f713ea",
  measurementId: "G-BZ0BZ9PVE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmLLzJl3ZxVbQujUPkVbP6FcmIzMy3-Fw",
  authDomain: "app-aprende-ingles.firebaseapp.com",
  projectId: "app-aprende-ingles",
  storageBucket: "app-aprende-ingles.appspot.com",
  messagingSenderId: "376846532239",
  appId: "1:376846532239:web:2eda365631711b0989bafa",
  measurementId: "G-X0NK5YY0RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
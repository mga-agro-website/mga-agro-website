// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG9u_lVAfHfrlOT-Aw6xCqm11hkfevow8",
  authDomain: "mgaagroweb.firebaseapp.com",
  projectId: "mgaagroweb",
  storageBucket: "mgaagroweb.firebasestorage.app",
  messagingSenderId: "201116168634",
  appId: "1:201116168634:web:62102826b108dd5947ed83",
  measurementId: "G-DF0XEB42DF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export default app;

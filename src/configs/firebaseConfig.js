import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // Correct storage bucket URL
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDGmXvrsunTXGGmbTqWCad7I_XLJHaND1g",
//   authDomain: "reext-ecommerce.firebaseapp.com",
//   projectId: "reext-ecommerce",
//   storageBucket: "reext-ecommerce.firebasestorage.app",
//   messagingSenderId: "920272011795",
//   appId: "1:920272011795:web:c3b2e4e1c55dbe327375e6",
//   measurementId: "G-J0P2JK95VS"
// };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth, Firestore, and Storage
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Firebase Storage

// Export the necessary Firebase functions
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  db,
  doc,
  setDoc,
  getDoc,
  storage, // Export storage for image upload
  ref,     // Firebase Storage reference function
  uploadBytesResumable, // Upload function
  getDownloadURL, // Function to get the image URL
  collection,
  getDocs,
};

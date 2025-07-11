// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY ?? "tu-apiKey",
    authDomain: import.meta.env.VITE_AUTH_DOMAIN ?? "tu-authDomain",
    projectId: import.meta.env.VITE_PROJECT_ID ?? "tu-projectId",
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET ?? "tu-storageBucket",
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID ?? "tu-messagingSenderId",
    appId: import.meta.env.VITE_APP_ID ?? "tu-appId",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
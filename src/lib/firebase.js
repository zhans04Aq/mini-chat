
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactminichat.firebaseapp.com",
    projectId: "reactminichat",
    storageBucket: "reactminichat.firebasestorage.app",
    messagingSenderId: "814292103992",
    appId: "1:814292103992:web:08a48f968b6c324d6607cd"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "kidjoker-blog.firebaseapp.com",
  projectId: "kidjoker-blog",
  storageBucket: "kidjoker-blog.appspot.com",
  messagingSenderId: "90297456534",
  appId: "1:90297456534:web:7a07b445133c807c2befb7"
};

export const app = initializeApp(firebaseConfig);
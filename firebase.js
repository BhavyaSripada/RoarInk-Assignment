
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  


const firebaseConfig = {
  apiKey: "AIzaSyBRei1pjMK38qo_LDA2BJciEk4GN-NbW5E",
  authDomain: "chat-app-35d04.firebaseapp.com",
  projectId: "chat-app-35d04",
  storageBucket: "chat-app-35d04.appspot.com",
  messagingSenderId: "395417090073",
  appId: "1:395417090073:web:ce721ae1d80f9739bcd288",
  measurementId: "G-470TJQP8C4"
  };


const app=initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
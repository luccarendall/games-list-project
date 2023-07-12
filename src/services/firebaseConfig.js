// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnpevv9BjzydoUjutLQkeDFNSMFVOXIVo",
  authDomain: "games-search-app.firebaseapp.com",
  projectId: "games-search-app",
  storageBucket: "games-search-app.appspot.com",
  messagingSenderId: "219850576122",
  appId: "1:219850576122:web:5ca7458361b9c58c2cb943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
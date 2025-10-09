import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARWlqAL-fLZVxx6a4tLBDyUvPoN8UBdqE",
  authDomain: "predictor-backend-746e1.firebaseapp.com",
  projectId: "predictor-backend-746e1",
  storageBucket: "predictor-backend-746e1.firebasestorage.app",
  messagingSenderId: "662681606371",
  appId: "1:662681606371:web:3996e870561abd2c8c4dd6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
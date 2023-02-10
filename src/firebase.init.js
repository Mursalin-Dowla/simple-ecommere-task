// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqB5DezmNvs7WDi0a6b_1j6bFpRBM0HAg",
  authDomain: "simple-ecommerce-task.firebaseapp.com",
  projectId: "simple-ecommerce-task",
  storageBucket: "simple-ecommerce-task.appspot.com",
  messagingSenderId: "521543383285",
  appId: "1:521543383285:web:df0260786aee93959bedbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;

// apiKey: process.env.REACT_APP_apiKey,
// authDomain: process.env.REACT_APP_authDomain,
// projectId: process.env.REACT_APP_projectId,
// storageBucket: process.env.REACT_APP_storageBucket,
// messagingSenderId: process.env.REACT_APP_messagingSenderId,
// appId: process.env.REACT_APP_appId
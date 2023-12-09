// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaaXu4EL3GOrwaRI5lFfszQjtsvN0JVxE",
  authDomain: "jerins-parlour-6a1fa.firebaseapp.com",
  projectId: "jerins-parlour-6a1fa",
  storageBucket: "jerins-parlour-6a1fa.appspot.com",
  messagingSenderId: "808292092729",
  appId: "1:808292092729:web:736b7b773c54fe4a7236e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
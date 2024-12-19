import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3QEuJ7Fnkjuj2gXv-MPgK5aOWVpPVUgw",
  authDomain: "recipe-64442.firebaseapp.com",
  projectId: "recipe-64442",
  storageBucket: "recipe-64442.firebasestorage.app",
  messagingSenderId: "575537380079",
  appId: "1:575537380079:web:93b707fc07ab25aa27391a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const RecipeDb = getFirestore(app); 
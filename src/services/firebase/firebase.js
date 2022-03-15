import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAUVLGEBbj6RGJf-QhJ9hMO4ZeQMERmtCU",
  authDomain: "camada-24925-4208f.firebaseapp.com",
  projectId: "camada-24925-4208f",
  storageBucket: "camada-24925-4208f.appspot.com",
  messagingSenderId: "1017622677361",
  appId: "1:1017622677361:web:73a1cce726dcb3d36218d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const firestoreDb = getFirestore(app)

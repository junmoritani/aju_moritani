// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  // collection,
  // addDoc,
  // doc,
  // updateDoc,
} from "firebase/firestore";
// import { allProducts } from "../mock/products";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

// allProducts.forEach(async (obj) => {
//   const docRef = await addDoc(collection(db, "produtos"), obj);
//   console.log("Document written with ID: ", docRef.id);
// });

//Atualizar produtos
// const prodRef = doc(db, "produtos", "otnbjOECDw1CFrXkYUUY");
// updateDoc(prodRef, { price: 70 });

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
  apiKey: "AIzaSyAvEqG24jd4NIbkHVxFPJVGaHn-wqVkoY0",
  authDomain: "aju-ecommerce.firebaseapp.com",
  projectId: "aju-ecommerce",
  storageBucket: "aju-ecommerce.appspot.com",
  messagingSenderId: "557788577731",
  appId: "1:557788577731:web:8a81e93283d0809c244776",
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

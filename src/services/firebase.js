// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const produtos = [
  {
    id: 0,
    type: "Fruta",
    title: "Morango",
    description: "bandejas de 500g",
    price: 5.5,
    pictureUrl:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantityAvailable: 20,
  },
  {
    id: 1,
    type: "Legume",
    title: "Vagem",
    description: "bandejas de 200g",
    price: 10.6,
    pictureUrl:
      "https://i.pinimg.com/originals/51/0e/46/510e467ff76579cc30f3799ca2be722b.jpg",
    quantityAvailable: 20,
  },
  {
    id: 3,
    type: "Fruta",
    title: "Abacaxi",
    description: "unidade",
    price: 4,
    pictureUrl:
      "https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quantityAvailable: 20,
  },
];

// produtos.forEach(async (obj) => {
//   const docRef = await addDoc(collection(db, "produtos"), obj);
//   console.log("Document written with ID: ", docRef.id);
// });

import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { allProducts } from "../../mock/products";
import { collection, getDocs } from "firebase/firestore";
import db from "../../services/firebase";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "produtos");
    getDocs(itemsCollection).then((snapshot) => {
      //usar id gerado pelo firebase
      // setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setItems(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <div className="ItemListContainer">
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;

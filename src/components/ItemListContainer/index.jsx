import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { allProducts } from "../../mock/products";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  function itemRequest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  async function createList() {
    const produtos = await itemRequest();
    setItems(allProducts);
  }

  useEffect(() => {
    createList();
  }, []);

  return (
    <div className="ItemListContainer">
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;

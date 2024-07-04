import React, { useEffect, useState } from "react";
import ItemList from "../../ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  function itemRequest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 0,
            title: "Camiseta",
            description: "camiseta da lua",
            price: 52,
            pictureUrl: "#",
          },
          {
            id: 1,
            title: "Shorts",
            description: "shorts da lua",
            price: 100,
            pictureUrl: "#",
          },
          {
            id: 2,
            title: "Blusa",
            description: "blusa da lua",
            price: 36,
            pictureUrl: "#",
          },
        ]);
      }, 2000);
    });
  }

  async function createList() {
    const produtos = await itemRequest();
    setItems(produtos);
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

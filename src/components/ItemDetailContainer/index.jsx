import ItemDetail from "../ItemDetail";
import React, { useEffect, useState } from "react";

function ItemDetailContainer() {
  const [item, setItems] = useState([]);

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 0,
          title: "Camiseta",
          description: "camiseta da lua",
          price: 52,
          pictureUrl: "#",
        });
      }, 2000);
    });
  };
  async function createItem() {
    const produtos = await getItem();
    setItems(produtos);
  }

  useEffect(() => {
    createItem();
  }, []);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail Item={item} />
    </div>
  );
}

export default ItemDetailContainer;

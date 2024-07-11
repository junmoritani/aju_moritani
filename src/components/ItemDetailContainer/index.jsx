import ItemDetail from "../ItemDetail";
import React, { useEffect, useState } from "react";
import { allProducts } from "../../mock/products";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  // const [item, setItem] = useState([]);
  const { id } = useParams();
  const itemId = parseInt(id);

  const item = allProducts.find((product) => product.id === itemId);

  // const getItem = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         id: 0,
  //         title: "Camiseta",
  //         description: "camiseta da lua",
  //         price: 52,
  //         pictureUrl: "#",
  //       });
  //     }, 2000);
  //   });
  // };
  // async function createItem() {
  //   const produtos = await getItem();
  //   setItem(allProducts);
  // }

  // useEffect(() => {
  //   createItem();
  // }, []);
  if (!item) {
    return <div>Product not found</div>;
  }
  return (
    <div className="ItemDetailContainer">
      <ItemDetail Item={item} />
    </div>
  );
}

export default ItemDetailContainer;

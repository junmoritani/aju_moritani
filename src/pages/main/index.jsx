// import { useEffect, useState } from "react";
// import { allProducts } from "../../mock/products";
import "./style.css";
import ItemListContainer from "../../components/ItemListContainer";
import "../../services/firebase";

function Main() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setProducts(allProducts);
  // }, []);

  // const uniqueProductTypes = new Set();
  // const pills = allProducts
  //   .map((product) => {
  //     if (!uniqueProductTypes.has(product.type)) {
  //       uniqueProductTypes.add(product.type);
  //       return product.type;
  //     }
  //   })
  //   .filter((type) => type !== undefined);

  return (
    <div className="Main">
      <h1>Menu</h1>
      <h2>informações do site</h2>
      <ItemListContainer />
    </div>
  );
}

export default Main;

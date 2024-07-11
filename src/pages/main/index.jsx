import { useEffect, useState } from "react";
import Item from "../../components/Item";
import Pills from "../../components/Pills";
import Search from "../../components/Search";
import { allProducts } from "../../mock/products";
import "./style.css";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  const uniqueProductTypes = new Set();
  const pills = allProducts
    .map((product) => {
      if (!uniqueProductTypes.has(product.type)) {
        uniqueProductTypes.add(product.type);
        return product.type;
      }
    })
    .filter((type) => type !== undefined);

  return (
    <div className="Main">
      <h1>Menu</h1>
      <h2>informações do site</h2>
      <Search />
      <Pills types={pills} />
      <div className="cards-container">
        {products.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Main;

import { Routes, Route } from "react-router-dom";
import Main from "../pages/main";
import Products from "../pages/products";
import Product from "../pages/product";

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/Produtos" element={<Products />} />
      <Route exact path="/Produto" element={<Product />} />
    </Routes>
  );
}

export default Router;

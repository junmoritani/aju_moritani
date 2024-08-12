import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/Produtos/:filter?" element={<Products />} />
      <Route exact path="/Checkout" element={<Checkout />} />
      <Route exact path="/Orders" element={<Orders />} />
      <Route exact path="/Produtos" element={<Products />} />
      <Route exact path="/Produtos/:id" element={<Product />} />
    </Routes>
  );
}

export default Router;

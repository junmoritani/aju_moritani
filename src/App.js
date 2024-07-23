import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

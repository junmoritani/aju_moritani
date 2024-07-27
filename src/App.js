import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import CartProvider from "./context/CartContext";
import toast, { Toaster } from "react-hot-toast";
import "./services/firebase";

function App() {
  const notify = () => toast("Here is your toast.");

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Router />
          <Toaster />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

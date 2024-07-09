import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header contador={contador} />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;

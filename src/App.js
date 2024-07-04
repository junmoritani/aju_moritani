import "./App.css";
import ItemCount from "./components/ItemCount";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <Header contador={contador} />
      <ItemListContainer greeting="Minha Listagem" />
      <ItemCount count={contador} setCount={setContador} stock={10} />
    </div>
  );
}

export default App;

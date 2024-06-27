import "./App.css";
import Clicker from "./components/ExemplosAula/Clicker";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [clickTime, setClickTime] = useState(null);

  function adicionarContador() {
    setContador(contador + 1);
    setClickTime(new Date().toLocaleString());
  }
  return (
    <div className="App">
      <Header contador={contador} />
      <ItemListContainer greeting="Minha Listagem" />
      <Clicker
        contador={contador}
        adicionar={adicionarContador}
        clickTime={clickTime}
      />
    </div>
  );
}

export default App;

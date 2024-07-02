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
      {/* <ItemCount contador={contador} adicionar={adicionarContador} /> */}
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(newCount) => setContador(newCount)}
      />
      <ItemCount
        initial={2}
        stock={20}
        onAdd={(newCount) => setContador(newCount)}
      />
    </div>
  );
}

export default App;

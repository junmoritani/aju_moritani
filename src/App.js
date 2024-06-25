import "./App.css";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting="Minha Listagem" />
    </div>
  );
}

export default App;

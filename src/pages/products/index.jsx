import ItemCount from "../../components/ItemCount";
import ItemListContainer from "../../components/ItemListContainer";
import { useState } from "react";

function Products() {
  const [contador, setContador] = useState(0);

  return (
    <div className="Products">
      <ItemListContainer greeting="Minha Listagem" />
      <ItemCount count={contador} setCount={setContador} stock={10} />
    </div>
  );
}

export default Products;

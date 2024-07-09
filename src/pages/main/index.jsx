import ItemCount from "../../components/ItemCount";
import { useState } from "react";

function Main() {
  const [contador, setContador] = useState(0);

  return (
    <div className="Main">
      <ItemCount count={contador} setCount={setContador} stock={10} />
    </div>
  );
}

export default Main;

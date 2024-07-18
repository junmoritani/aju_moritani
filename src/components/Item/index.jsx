import "./style.css";
import ItemCount from "../../components/ItemCount";
import { useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

function Item({ item }) {
  // const [contador, setContador] = useState(0);
  const [quantity, setQuantity] = useState(0);

  function submit() {}

  return (
    <div className="Item">
      <div className="img-container">
        <Link to={`/Produtos/${item.id}`}>
          <img className="item-img" src={item.pictureUrl} alt="" />
        </Link>
      </div>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <h2>{item.price}</h2>
      {/* <div className="acoes-card">
        <div className="contador">
          <button onClick={() => quantity > 0 && setQuantity(quantity - 1)}>
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={() =>
              quantity < item.quantityAvailable && setQuantity(quantity + 1)
            }
          >
            +
          </button>
        </div>
        <Button onClick={submit}>Adicionar +</Button>
      </div> */}
      <ItemCount count={quantity} setCount={setQuantity} stock={10} />
      <Button onClick={submit}>Adicionar +</Button>
    </div>
  );
}

export default Item;

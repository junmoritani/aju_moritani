import "./style.css";
import ItemCount from "../../components/ItemCount";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Button from "../Button";
import { Link } from "react-router-dom";

function Item({ item }) {
  const { addToCart } = useCart();

  // const [contador, setContador] = useState(0);
  const [quantity, setQuantity] = useState(0);

  function submit() {
    console.log("adicionado");
    addToCart({ ...item, quantity });
  }

  return (
    <div className="Item">
      <div className="img-container">
        <Link to={`/Produtos/${item.id}`}>
          <img className="item-img" src={item.pictureUrl} alt="" />
        </Link>
      </div>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <h2>
        {item.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h2>
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
      <ItemCount
        count={quantity}
        setCount={setQuantity}
        stock={item.quantityAvailable}
      />
      <Button onClick={submit}>Adicionar +</Button>
    </div>
  );
}

export default Item;

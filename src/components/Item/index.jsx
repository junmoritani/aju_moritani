import "./style.css";
import ItemCount from "../../components/ItemCount";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Button from "../Button";
import { Link } from "react-router-dom";
import { ShoppingCart, Plus } from "feather-icons-react";
import toast from "react-hot-toast";

function Item({ item }) {
  const { addToCart } = useCart();

  // const [contador, setContador] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [qtdActive, setQtdActive] = useState(false);

  function submit() {
    console.log("adicionado");
    if (quantity > 0) {
      addToCart({ ...item, quantity });
      setQtdActive(false);
      setQuantity(0);
      toast.success("Produto adicionado ao carrinho");
    }
  }

  return (
    <div className="bg-orange-100 w-44 rounded-xl overflow-hidden">
      <div className=" bg-black w-fi h-44">
        <Link to={`/Produtos/${item.id}`}>
          <img className="item-img" src={item.pictureUrl} alt="" />
        </Link>
        <div className="flex flex-row gap-3  relative bottom-14 mx-3  ">
          {qtdActive ? (
            <>
              <ItemCount
                count={quantity}
                setCount={setQuantity}
                stock={item.quantityAvailable}
              />
              <Button className="bg-red-500 p-2 rounded-full" onClick={submit}>
                <ShoppingCart size="30" color="white" />
              </Button>
            </>
          ) : (
            <Button
              className="bg-white p-2 rounded-full "
              onClick={() => {
                setQtdActive(true);
                setQuantity(1);
              }}
            >
              <Plus size="30" color="red" />
            </Button>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 p-3">
        <h1 className="font-bold text-xl">
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h1>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
      </div>
    </div>
  );
}

export default Item;

import "./style.css";
import ItemCount from "../../components/ItemCount";
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import Button from "../Button";
import { Link } from "react-router-dom";
import { ShoppingCart, Plus } from "feather-icons-react";
import toast from "react-hot-toast";

function Item({ item }) {
  const { cart, addToCart, addItemQtd, removeItemQtd } = useCart();

  // const [contador, setContador] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [qtdActive, setQtdActive] = useState(false);

  useEffect(() => {
    const cartItem = cart.find((i) => i.id === item.id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
      setQtdActive(true);
    } else {
      setQuantity(0);
      setQtdActive(false);
    }
  }, [cart, item.id]);

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1);
      addToCart({ ...item, quantity: 1 });
      toast.success("Produto adicionado ao carrinho");
    }
  };

  const handleAddQtdCart = () => {
    addItemQtd(item.id);
    toast.success("Produto atualizado no carrinho");
  };

  const handleRemoveQtdCart = () => {
    removeItemQtd(item.id);
    toast.success("Produto atualizado no carrinho");
  };

  return (
    <div className="bg-white w-44 shadow-md rounded-xl overflow-hidden">
      <div className="  h-44">
        <Link to={`/Produtos/${item.id}`}>
          <img className="item-img" src={item.pictureUrl} alt="" />
        </Link>
        <div className="flex flex-row gap-3 h-12  relative bottom-14 mx-3  ">
          {qtdActive ? (
            <>
              <ItemCount
                count={quantity}
                setCount={setQuantity}
                stock={item.quantityAvailable}
                addCart={handleAddQtdCart}
                removeCart={handleRemoveQtdCart}
              />
            </>
          ) : (
            <Button
              className="bg-white p-2 rounded-full"
              onClick={() => {
                setQtdActive(true);
                setQuantity(1);
                handleAddToCart();
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
        <h1 className="font-normal">{item.title}</h1>
        <h3 className="font-light">{item.description}</h3>
      </div>
    </div>
  );
}

export default Item;

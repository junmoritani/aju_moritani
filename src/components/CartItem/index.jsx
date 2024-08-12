import React, { useState } from "react";
// import { Trash2 } from "feather-icons-react";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import { Trash2 } from "feather-icons-react";
import toast from "react-hot-toast";

function CartItem({ item }) {
  const { removeFromCart, addItemQtd, removeItemQtd } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleAddQtdCart = () => {
    addItemQtd(item.id);
  };

  const handleRemoveQtdCart = () => {
    removeItemQtd(item.id);
  };

  return (
    <div className="bg-white shadow-md h-40  rounded-lg  overflow-clip flex">
      <div>
        <img
          className="h-40 w-48 object-cover  "
          src={item.pictureUrl}
          alt=""
        ></img>
        <div className="flex  justify-between relative  bottom-16 px-2 h-10   gap-4   mt-4">
          {/* Quantity */}

          <ItemCount
            count={item.quantity}
            setCount={setQuantity}
            stock={item.quantityAvailable}
            addCart={handleAddQtdCart}
            removeCart={handleRemoveQtdCart}
          />
          <button
            onClick={() => {
              removeFromCart(item.id);
              toast.error("Item Removido do Carrinho");
            }}
            className="bg-red-500  rounded-full w-16 h-10"
          >
            <Trash2 className="relative left-2 w-fit text-white" />
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full justify-between p-5">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-md text-start text-slate-700 font-semibold">
              {item.title}
            </h1>
            <p className="text-xs text-slate-600">{item.description}</p>
          </div>

          <div className="flex justify-between items-center mt-5">
            <div className="flex flex-col items-end">
              <p
                className={
                  item.priceWithDiscount
                    ? "line-through text-sm text-slate-600 font-normal"
                    : "text-lg text-slate-600 font-normal"
                }
              >
                {item.price?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <p
                className={
                  item.priceWithDiscount
                    ? "text-green-500 text-lg font-normal"
                    : ""
                }
              >
                {item.priceWithDiscount?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>
        </div>
        <div className=" flex gap-4 items-center justify-end">
          <p>Subtotal</p>
          <p className="text-lg font-bold text-slate-700 ">
            {(item.quantity * item.price).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

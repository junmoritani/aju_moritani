import React, { useEffect } from "react";
import { Plus, Minus } from "feather-icons-react";

function ItemCount({ count, setCount, stock, addCart, removeCart }) {
  useEffect(() => {
    if (count < 0) setCount(0);
    if (count > stock) setCount(stock);
  }, [count, setCount, stock]);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
      addCart();
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      removeCart();
    }
  };

  return (
    <div className="flex flex-row bg-white rounded-full h-full w-full justify-around items-center ">
      <button
        className="font-bold text-3xl text-red-500"
        onClick={decrement}
        disabled={count <= 0}
      >
        <Minus size="30" />
      </button>
      <p className="font-bold text-xl text-slate-900">{count}</p>

      <button
        className=" font-bold  text-3xl  text-red-500"
        onClick={increment}
        disabled={count >= stock}
      >
        <Plus size="30" />
      </button>
    </div>
  );
}

export default ItemCount;

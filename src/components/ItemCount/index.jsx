import React, { useEffect } from "react";

function ItemCount({ count, setCount, stock }) {
  useEffect(() => {
    if (count < 0) setCount(0);
    if (count > stock) setCount(stock);
  }, [count, setCount, stock]);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="ItemCount">
      <button onClick={decrement} disabled={count <= 0}>
        -
      </button>
      <p>{count}</p>
      <button onClick={increment} disabled={count >= stock}>
        +
      </button>
    </div>
  );
}

export default ItemCount;

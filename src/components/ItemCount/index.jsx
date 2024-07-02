import React from "react";
import { useState, useEffect } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  useEffect(() => {
    onAdd(count);
  }, [count, onAdd]);

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

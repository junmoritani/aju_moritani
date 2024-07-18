import React, { useState, createContext, useContext } from "react";

const CartContext = createContext(undefined);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addCart(item) {
    setCart(valor);
    if (isInCart(item)) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((obj) =>
          obj.id === item.id
            ? { ...obj, quantidade: obj.quantidade + item.quantidade }
            : obj
        );

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    } else {
      const updatedCart = [...cart, item];

      setCart(updatedCart);
    }
  }

  return (
    <CartContext.Provider value={{ cart, addCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "Para usar o useCart seu componente precisa estar dentro do CartProvider"
    );
  }

  return context;
}

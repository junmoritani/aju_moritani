import React, { useState, createContext, useContext } from "react";

const CartContext = createContext(undefined);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    // setCart(valor);
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

  function isInCart(itemId) {
    return cart.some((item) => item.id === itemId);
  }

  function cartQtd() {
    return cart.reduce((quantity, item) => (quantity += item.quantity), 0);
  }

  function addItemQtd(id) {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((obj) =>
        obj.id === id ? { ...obj, quantity: obj.quantity + 1 } : obj
      );
      return updatedCart;
    });
  }

  function removeItemQtd(id) {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((obj) =>
        obj.id === id && obj.quantity > 0
          ? { ...obj, quantity: obj.quantity - 1 }
          : obj
      );
      return updatedCart;
    });
  }

  function removeFromCart(itemId) {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  }

  function cartTotal() {
    return cart.reduce(
      (acc, item) =>
        acc + item.quantity * (item.priceWithDiscount || item.price),
      0
    );
  }

  function cleanCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cartQtd,
        addItemQtd,
        removeItemQtd,
        removeFromCart,
        cartTotal,
        cleanCart,
      }}
    >
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

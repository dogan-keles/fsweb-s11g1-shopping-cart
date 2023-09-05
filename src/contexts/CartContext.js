import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart([...cart, item]);
  };
  const removeItem = (order) => {
    setCart(cart.toSpliced(order, 1));
  };
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

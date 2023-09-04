import React from "react";
import { createContext, useContext, useState } from "react";

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart([...cart, item]);
  };
  const removeItem = (item) => {
    console.log("Removed items:", item);
    setCart(cart.filter((cartItem) => cartItem.id !== item));
  };
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext();
export default CartContextProvider;

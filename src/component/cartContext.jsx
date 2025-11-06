import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  
const [carts, setCarts] = useState(() => {
    const saved = localStorage.getItem("carts");
    return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem("carts", JSON.stringify(carts));
}, [carts]);
  
  
  const addToCart = (product) => {
    setCarts((prevCarts) => {
      const existItem = prevCarts.find((item) => item.id === product.id);

      if (existItem) {
        return prevCarts.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCarts, { ...product, count: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCarts((prevCarts) =>
      prevCarts
        .map((item) =>
          item.id === itemId ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const deleteFromCart = (itemId) => {setCarts((prevCarts) => prevCarts.filter((item) => item.id !== itemId));};

  
  const getTotalCount =()=> carts.reduce((sum, item) => sum + item.count, 0);

  const getTotalOriginalPrice =()=> carts.reduce((sum, item) => sum + (item.originalPrice || item.price) * item.count, 0);

  const getTotalPrice =()=> carts.reduce((sum, item) => sum + item.price * item.count, 0);

  const getTotalDiscount =()=> getTotalOriginalPrice() - getTotalPrice();


  const contextValue = {
    carts,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCount,
    getTotalOriginalPrice,
    getTotalPrice,
    getTotalDiscount,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
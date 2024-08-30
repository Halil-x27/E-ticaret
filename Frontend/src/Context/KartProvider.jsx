import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const KartContext = createContext();

const KartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(
    localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : []
  );

useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (cartItem) => {
    // setCartItem([...cartItem, cartItem]); 1. yol
    setCartItem((prevCart) => [
        ...prevCart,
        {
          ...cartItem,
          quantity: cartItem.quantity ? cartItem.quantity : 1,
        },
      ]);
  };

  const removeFromCart = (itemId) => {
    const filteredCartItems = cartItem.filter((cartItem) => {
      return cartItem._id !== itemId;
    });

    setCartItem(filteredCartItems);
  };

  return (
    <KartContext.Provider
      value={{
        setCartItem,
        cartItem,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </KartContext.Provider>
  );
};

export default KartProvider;

KartProvider.propTypes = {
  children: PropTypes.node,
};
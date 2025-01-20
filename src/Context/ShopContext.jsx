import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const getTotalUserRegister = () => {
    const user = JSON.parse(localStorage.getItem("formDataRegister"));
    return user ? user.length : 0;
  };

  const scrollToTop = () => {
    const scrollToTopAnimation = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > 0) {
        window.scrollTo(0, currentPosition - 150);
        requestAnimationFrame(scrollToTopAnimation);
      }
    };
    requestAnimationFrame(scrollToTopAnimation);
  };
  
  const contextValue = {
    scrollToTop,
    getTotalUserRegister,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

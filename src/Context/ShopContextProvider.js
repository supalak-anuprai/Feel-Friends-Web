import { useCallback, useMemo } from "react";
import { ShopContext } from "./ShopContext";

export const ShopContextProvider = (props) => {
  const getTotalUserRegister = useCallback(() => {
    const user = JSON.parse(localStorage.getItem("formDataRegister"));
    return user ? user.length : 0;
  }, []);

  const scrollToTop = useCallback(() => {
    const scrollToTopAnimation = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > 0) {
        window.scrollTo(0, currentPosition - 150);
        requestAnimationFrame(scrollToTopAnimation);
      }
    };
    requestAnimationFrame(scrollToTopAnimation);
  }, []);

  const contextValue = useMemo(
    () => ({
      scrollToTop,
      getTotalUserRegister,
    }),
    [scrollToTop, getTotalUserRegister]
  );
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

import { useContext } from "react";
import { CartContext } from "../context/Cart";


export const useCart = () => {
    const { state, dispatch } = useContext(CartContext);

    const handleAddToCart = (id) => {
      dispatch({ type: "ADD_TO_CART", payload: { id } });
    };

    const handleRemoveFromCart = (id) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    };

  return {
    cart: state.cart,
    handleAddToCart,
    handleRemoveFromCart,
  }
}

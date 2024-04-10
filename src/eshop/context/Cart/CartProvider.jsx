import { useReducer } from "react"
import { cartReducer, CartContext } from "./"


const initialState = {
    cart: [],
}

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, initialState)
  const getTotal = () => {
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  return (
    <CartContext.Provider value={{ state, dispatch, getTotal }}>
      { children }
    </CartContext.Provider>
  )
}

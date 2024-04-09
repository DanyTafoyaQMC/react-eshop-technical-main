import { useReducer } from "react"
import { cartReducer, CartContext } from "./"


const initialState = {
    cart: [],
}

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      { children }
    </CartContext.Provider>
  )
}

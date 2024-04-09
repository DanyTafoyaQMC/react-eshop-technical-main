import { useReducer } from "react"
import { cartReducer, CartContext } from "./"


const initialState = {
    cart: [],
}

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      { children }
    </CartContext.Provider>
  )
}

import { useContext } from "react"
import { CartContext } from "../context/Cart"


export const AddToCartBtn = ({ id }) => {
 const { dispatch } = useContext(CartContext);
  const onAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { id } });
    
  };
  return (
    <button className="btn btn-primary" onClick={ onAddToCart }>Add to cart</button>
  )
}

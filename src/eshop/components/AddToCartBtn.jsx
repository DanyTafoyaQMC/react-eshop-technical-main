import { useContext } from "react"
import { CartContext } from "../context/Cart"
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const AddToCartBtn = ({ id }) => {
 const { dispatch } = useContext(CartContext);
 const navigate = useNavigate();

  const onAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { id } });
    navigate("/cart");
  };
  return (
    <button className="btn btn-primary" onClick={ onAddToCart }>Add to cart</button>
  )
}

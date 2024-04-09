
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

// eslint-disable-next-line react/prop-types
export const AddToCartBtn = ({ id }) => {
 const { handleAddToCart } = useCart();
 const navigate = useNavigate();

  const onAddToCart = () => {
    handleAddToCart(id);
    navigate("/cart");
  };
  return (
    <button className="btn btn-primary" onClick={ onAddToCart }>Add to cart</button>
  )
}

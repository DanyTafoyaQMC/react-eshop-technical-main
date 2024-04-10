import { useEffect, useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { Loading } from "./Loading";
import { useCart } from "../hooks/useCart";


// eslint-disable-next-line react/prop-types
export const CartItem = ({ id }) => {
  const { product, isLoading, fetchProduct } = useFetchProducts();
  const { handleRemoveFromCart, cart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const { name, imageUrl: img, price } = product;

  useEffect(() => {
    console.log("Carrito de compras:", cart);
    fetchProduct(id);
  }, [id]);

  // Calcular el total utilizando el estado local
  const total = price * quantity;

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleSubtractQuantity = () => {
    setQuantity(quantity - 1);
    if (quantity === 1) {
      handleRemoveFromCart(id);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={`${img}`} className="img-fluid rounded-start" alt={name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <p className="card-text">Quantity: {quantity}</p>
                <p className="card-text">Total: {total}</p> {/* Mostrar el total */}
                <div className="btn-group" role="group" aria-label="Quantity">
                  <button type="button" className="btn btn-secondary" onClick={() => handleSubtractQuantity(id)}>-</button>
                  <button type="button" className="btn btn-secondary" onClick={handleAddQuantity}>+</button>
                </div>
                <button type="button" className="btn btn-danger" onClick={() => handleRemoveFromCart(id)}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


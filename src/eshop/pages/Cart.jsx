import { useContext, useEffect } from "react";
import { CartContext } from "../context/Cart";
import { BuyBtn, CartItem } from "../components";

export const Cart = () => {
  const { state } = useContext(CartContext);
  const { cart } = state;
  useEffect(() => {
    console.log("Carrito de compras:", cart);
  }, []);

  return (
    <>
      <h2 className="text-center">Shopping cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} id={item.id} />
          ))}
          <BuyBtn />
        </>
      )}
    </>
  );
};

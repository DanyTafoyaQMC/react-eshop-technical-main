import { useContext, useEffect } from "react";
import { CartContext } from "../context/Cart";
import { BuyBtn, CartItem } from "../components";

export const Cart = () => {
  const { state } = useContext(CartContext);
  const { cart } = state;
  useEffect(() => {
    console.log("Carrito de compras:", cart);
  }, []);

  const uniqueCartItems = cart.filter((item, index, self) => {
    return index === self.findIndex((t) => t.id === item.id);
  })
  return (
    <>
      <h2 className="text-center">Shopping cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {uniqueCartItems.map((item) => (
            <CartItem key={item.id} id={item.id} />
          ))}
          <BuyBtn />
        </>
      )}
    </>
  );
};

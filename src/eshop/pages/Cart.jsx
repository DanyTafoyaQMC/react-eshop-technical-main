import { useContext } from "react";
import { CartContext } from "../context/Cart";

export const Cart = () => {
  const { state } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Page</h2>
      <div>
        <h3>Cart Items:</h3>
        <ul>
          {state.cart.map((item) => (
            <li key={item.id}>
              {item.id} {/* Aquí puedes mostrar otros detalles del producto si los tienes */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

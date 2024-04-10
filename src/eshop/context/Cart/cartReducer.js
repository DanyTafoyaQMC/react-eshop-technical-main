export const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Lógica para añadir un producto al carrito
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case 'REMOVE_FROM_CART':
        // Lógica para eliminar un producto del carrito
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id),
        };
      // Otros casos según sea necesario
      default:
        return state;
    }
  };
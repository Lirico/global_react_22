import TYPES from "./actions";
import { initialState } from "./initialState";

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      // 1. Buscar en la DB un producto cuyo id coincida con el id
      // de la tarjeta con la que interactuó el usuario.
      // 2. Guardar el producto en una variable
      const newItem = state.products.find(
        (product) => product.id === action.payload,
      );
      // 3. Buscar en la DB (carrito) un item cuyo id coincida con el id del producto
      // 4. Guardar el item en una variable
      const isItemInCart = state.cart.find((item) => item.id === newItem.id); // {} / undefined
      // 5. ¿La variable trae algo?
      return isItemInCart
        ? // 6. -> Si trae -> Incremento cantidad en 1
          {
            ...state,
            cart: state.cart.map((item) =>
              item.id === isItemInCart.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item,
            ),
          }
        : // 7. -> Si no trae -> Insertar la referencia al producto en el carrito
          {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_ITEM: {
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload,
      );

      // Podria colocar una logica para eliminar el elemento encontrado.
      // Pero necesito contemplar la cantidad
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemToDelete.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item,
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== itemToDelete.id),
          };
    }
    case TYPES.REMOVE_ALL_ITEMS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
        return initialState
    }
    default:
      return state;
  }
};

import { createContext, useReducer } from "react";

const CartContext = createContext(null);

const CartDispatchContext = createContext(null);

const initialItems = [];

function itemsReducer(items, action) {
  switch (action.type) {
    case "addToCart": {
    }
    case "removeFromCart": {
    }
    case "getQuantity": {
    }
    case "increaseQuantity": {
    }
    case "decrementQuantity": {
    }
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  return (
    <CartContext.Provider value={items}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

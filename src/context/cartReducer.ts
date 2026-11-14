import type { CartAction, CartItem, CartState } from '../types';

export const initialCartState: CartState = {
  items: [],
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const quantityToAdd = action.payload.quantity ?? 1;
      const existing = state.items.find((item) => item.plant.id === action.payload.plant.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.plant.id === action.payload.plant.id
              ? { ...item, quantity: item.quantity + quantityToAdd }
              : item,
          ),
        };
      }
      const newItem: CartItem = { plant: action.payload.plant, quantity: quantityToAdd };
      return { items: [...state.items, newItem] };
    }
    case 'INCREMENT':
      return {
        items: state.items.map((item) =>
          item.plant.id === action.payload.plantId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    case 'DECREMENT':
      return {
        items: state.items.map((item) =>
          item.plant.id === action.payload.plantId
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item,
        ),
      };
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter((item) => item.plant.id !== action.payload.plantId),
      };
    case 'CLEAR_CART':
      return initialCartState;
    default:
      return state;
  }
}

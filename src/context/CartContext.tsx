import React, { createContext, useContext, useMemo, useReducer } from 'react';
import type { CartAction, CartItem, Plant } from '../types';
import { cartReducer, initialCartState } from './cartReducer';

interface CartContextValue {
  readonly items: readonly CartItem[];
  readonly totalCount: number;
  readonly totalPrice: number;
  readonly addItem: (plant: Plant, quantity?: number) => void;
  readonly increment: (plantId: string) => void;
  readonly decrement: (plantId: string) => void;
  readonly removeItem: (plantId: string) => void;
  readonly clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

function dispatchAction(dispatch: React.Dispatch<CartAction>, action: CartAction): void {
  dispatch(action);
}

export function CartProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const value = useMemo<CartContextValue>(() => {
    const totalCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.items.reduce((sum, item) => sum + item.plant.priceRsd * item.quantity, 0);
    return {
      items: state.items,
      totalCount,
      totalPrice,
      addItem: (plant: Plant, quantity = 1) =>
        dispatchAction(dispatch, { type: 'ADD_ITEM', payload: { plant, quantity } }),
      increment: (plantId: string) => dispatchAction(dispatch, { type: 'INCREMENT', payload: { plantId } }),
      decrement: (plantId: string) => dispatchAction(dispatch, { type: 'DECREMENT', payload: { plantId } }),
      removeItem: (plantId: string) => dispatchAction(dispatch, { type: 'REMOVE_ITEM', payload: { plantId } }),
      clearCart: () => dispatchAction(dispatch, { type: 'CLEAR_CART' }),
    };
  }, [state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart mora biti korišćen unutar CartProvider komponente.');
  }
  return context;
}

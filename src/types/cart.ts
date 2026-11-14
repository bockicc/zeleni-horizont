import type { Plant } from './plant';

export interface CartItem {
  readonly plant: Plant;
  readonly quantity: number;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: { plant: Plant; quantity?: number } }
  | { type: 'INCREMENT'; payload: { plantId: string } }
  | { type: 'DECREMENT'; payload: { plantId: string } }
  | { type: 'REMOVE_ITEM'; payload: { plantId: string } }
  | { type: 'CLEAR_CART' };

export interface CartState {
  readonly items: readonly CartItem[];
}

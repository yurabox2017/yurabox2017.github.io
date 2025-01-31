import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import type { PayloadAction } from '@reduxjs/toolkit';
export const CART_PERSISTENT_STATE = 'cart';

export interface ICartItem {
  id: string;
  quantity: number;
}

export interface CartState {
  items: ICartItem[];
}

const initialState: CartState = loadState<CartState>(CART_PERSISTENT_STATE) ?? {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clear: (state) => {
      state.items = [];
    },
    delete: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) {
        return;
      }
      if (existed.quantity === 1) state.items = state.items.filter((i) => i.id !== action.payload);
      else {
        state.items.map((i) => {
          if (i.id === action.payload) {
            i.quantity -= 1;
          }
          return i;
        });
        return;
      }
    },
    add: (state, action: PayloadAction<string>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) {
        state.items.push({ id: action.payload, quantity: 1 });
        return;
      }
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.quantity += 1;
        }
        return i;
      });
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;

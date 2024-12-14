import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { ICartProduct } from 'src/entities/interfaces/ICartProduct';
import type {PayloadAction} from "@reduxjs/toolkit"
export const CART_PERSISTENT_STATE = 'cartData';

export interface ICartState {
  items: ICartProduct[];
}

const initialState: ICartState = loadState<ICartState>(CART_PERSISTENT_STATE) ?? {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clear: (state) => {
      state.items = [];
    },
    delete: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    add: (state, action: PayloadAction<ICartProduct>) => {
      const existed = state.items.find((i) => i === action.payload);
      //   if (!existed) {
      state.items.push(action.payload);
      return;
      //   }
      //   state.items.map((i) => {
      //     if (i === action.payload) {
      //       i.count += 1;
      //     }
      //     return i;
      //   });
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;

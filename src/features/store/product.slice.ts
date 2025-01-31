import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'src/entities/types/product';

export const PRODUCT_PERSISTENT_STATE = 'productData';

export interface IProductState {
  items: Product[];
}

const initialState: IProductState = loadState<IProductState>(PRODUCT_PERSISTENT_STATE) ?? {
  items: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clear: (state) => {
      state.items = [];
    },
    delete: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    add: (state, action: PayloadAction<Product>) => {
      // const existed = state.items.find((i) => i === action.payload);
      state.items.push(action.payload);
    },
    load: (state, action: PayloadAction<Product[]>) => {
      // const existed = state.items.find((i) => i === action.payload);
      state.items = action.payload;
    },
  },
});

export default productSlice.reducer;
export const productActions = productSlice.actions;

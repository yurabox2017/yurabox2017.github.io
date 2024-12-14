import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';
import IShortProduct from 'src/entities/interfaces/IShortProduct';


export const PRODUCT_PERSISTENT_STATE = 'productData';

export interface IProductState {
  items: IShortProduct[];
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
    delete: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    add: (state, action: PayloadAction<IShortProduct>) => {
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

export default productSlice.reducer;
export const productActions = productSlice.actions;

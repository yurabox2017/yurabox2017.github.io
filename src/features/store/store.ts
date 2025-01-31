import { AnyAction, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userSlice from './user.slice';
import cartSlice from './cart.slice';
import productSlice from './product.slice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { authApi } from 'src/services/api/authApi.slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productApi } from 'src/services/api/productApi.slice';
import { orderApi } from 'src/services/api/orderApi.slice';

const persistConfig = {
  key: 'root',
  storage,
  debug: true,
};

const rootReducer = combineReducers({ user: userSlice, cart: cartSlice, product: productSlice });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    rootReducer: persistedReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
      thunk: {
        extraArgument: {
          url: 'http://19429ba06ff2.vps.myjino.ru/api/',
          version: '1',
        },
      },
    })
      .concat(authApi.middleware)
      .concat(productApi.middleware)
      .concat(orderApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
export const persistor = persistStore(store);
export type ExtraParams = { url: string; version: string };
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, ExtraParams, AnyAction>;

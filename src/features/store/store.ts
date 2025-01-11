import { AnyAction, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userSlice from './user.slice';
import cartSlice from './cart.slice';
import productSlice from './product.slice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { authApi } from 'src/services/api/authApi.slice';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  storage,
  debug: true,
};

const rootReducer = combineReducers({ userData: userSlice, cartData: cartSlice, productData: productSlice });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    user: rootReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
  //     },
  //   }).concat(authApi.middleware),
});

// store.subscribe(() => {
//   saveState({ userData: store.getState().user }, JWT_PERSISTENT_STATE);
// });
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
// export const persistor = persistStore(store);
export type ExtraParams = { url: string; version: string };
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, ExtraParams, AnyAction>;

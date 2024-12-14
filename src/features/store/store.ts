import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userSlice, { JWT_PERSISTENT_STATE } from './user.slice';
import cartSlice from './cart.slice';
import productSlice from './product.slice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'root',
  storage,
  debug: true,
};

const rootReducer = combineReducers({ userData: userSlice, cartData: cartSlice, productData: productSlice });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// store.subscribe(() => {
//   saveState({ userData: store.getState().user }, JWT_PERSISTENT_STATE);
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
export const persistor = persistStore(store);

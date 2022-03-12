import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import product from './slices/product';
import category from './slices/category';

export const store = configureStore({
  reducer: combineReducers({product, category}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

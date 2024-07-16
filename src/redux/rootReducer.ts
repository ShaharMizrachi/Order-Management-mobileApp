import {combineReducers} from '@reduxjs/toolkit';
import productsReducer from './types/productsSlice';
import customersReducer from './types/customersSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  customers: customersReducer,
});

export default rootReducer;

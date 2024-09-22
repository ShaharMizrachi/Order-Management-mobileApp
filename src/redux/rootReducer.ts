import {combineReducers} from '@reduxjs/toolkit';
import productsReducer from './types/productsSlice';
import customersReducer from './types/customersSlice';
import ordersReducer from './types/ordersSlice ';

const rootReducer = combineReducers({
  products: productsReducer,
  customers: customersReducer,
  orders: ordersReducer,
});

export default rootReducer;

import {combineReducers} from '@reduxjs/toolkit';
import productsReducer from './types/productsSlice';
import customersReducer from './types/customersSlice';
import ordersReducer from './types/ordersSlice ';
import activeOrderReducer from './types/activeOrderSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  customers: customersReducer,
  orders: ordersReducer,
  activeOrder: activeOrderReducer,
});

export default rootReducer;

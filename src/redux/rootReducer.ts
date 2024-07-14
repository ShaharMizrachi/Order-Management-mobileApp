import {combineReducers} from '@reduxjs/toolkit';
import productsReducer from '../redux/types/actions';

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;

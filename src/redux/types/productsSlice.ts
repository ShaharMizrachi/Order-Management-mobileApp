import {createSlice} from '@reduxjs/toolkit';
import {Product} from './types';

interface ProductsState {
  allProducts: Product[];
}

const initialState: ProductsState = {
  allProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts(state, action) {
      state.allProducts = action.payload;
    },
  },
});

export const {setAllProducts} = productsSlice.actions;

export default productsSlice.reducer;

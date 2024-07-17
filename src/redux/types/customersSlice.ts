import {createSlice} from '@reduxjs/toolkit';
import {Customer} from './types';

interface CustomerState {
  allCustomers: Customer[];
}

const initialState: CustomerState = {
  allCustomers: [],
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setAllCustomers(state, action) {
      state.allCustomers = action.payload;
    },
  },
});

export const {setAllCustomers} = customersSlice.actions;

export default customersSlice.reducer;

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Order} from './types';

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    removeOrder: (state, action: PayloadAction<number>) => {
      state.orders.splice(action.payload, 1);
    },
    updateOrder: (
      state,
      action: PayloadAction<{index: number; order: Order}>,
    ) => {
      const {index, order} = action.payload;
      state.orders[index] = order;
    },
  },
});

export const {addOrder, removeOrder, updateOrder} = ordersSlice.actions;
export default ordersSlice.reducer;

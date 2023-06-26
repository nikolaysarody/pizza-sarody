import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type OrderResponse } from '../types/order';

interface OrderState {
    loading: boolean;
    error: string;
    items: OrderResponse[];
}

const initialState: OrderState = {
    loading: false,
    error: '',
    items: [],
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        fetchOrdersSuccess(state, action: PayloadAction<OrderResponse[]>) {
            state.loading = false;
            state.items = action.payload;
        },
        fetchingOrder(state) {
            state.loading = true;
        },
        appendedOrder(state) {
            state.loading = false;
        },
        fetchOrderError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        },
        deleteOrderItem(state, action: PayloadAction<number>) {
            state.items.splice(
                state.items.findIndex((item) => {
                    return item.orderNumber === action.payload;
                }),
                1,
            );
        },
    },
});

export const {
    fetchOrdersSuccess, fetchingOrder, fetchOrderError, appendedOrder, deleteOrderItem,
} = orderSlice.actions;

export default orderSlice.reducer;

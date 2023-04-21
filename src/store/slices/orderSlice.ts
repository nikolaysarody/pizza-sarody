import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OrderResponse} from '../../models/order/models';
import {IPizza} from '../../models/pizza/models';

interface OrderState {
    loading: boolean;
    error: string;
    pizza: IPizza[];
    totalPrice: number;
    items: OrderResponse[],
}

const initialState: OrderState = {
    loading: false,
    error: '',
    pizza: [],
    totalPrice: 0,
    items: [],
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItemInOrder(state, action: PayloadAction<IPizza>) {
            if (!state.pizza.some((item: IPizza) => item._id === action.payload._id)) {
                state.pizza.push({...action.payload, count: 1});
            } else {
                state.pizza.forEach(item => {
                    if (item._id === action.payload._id && item.count) {
                        item.count++;
                    }
                });
            }
            state.totalPrice = state.totalPrice + action.payload.price;
            localStorage.setItem('pizza', JSON.stringify(state.pizza));
            localStorage.setItem('price', JSON.stringify(state.totalPrice));
            localStorage.getItem('userId') ?
                localStorage.setItem('cartId', localStorage.getItem('userId')!) :
                localStorage.setItem('cartId', 'no-user');

        },
        deleteItemInOrder(state, action: PayloadAction<Pick<IPizza, '_id' | 'price'>>) {
            if (state.pizza.some((item: IPizza) => item._id === action.payload._id)) {
                state.pizza.forEach((item, index) => {
                    if (item._id === action.payload._id && item.count) {
                        if (item.count >= 2) {
                            item.count--;
                        } else {
                            state.pizza.splice(index, 1);
                        }
                    }
                });
                state.totalPrice = state.totalPrice - action.payload.price;
                localStorage.setItem('pizza', JSON.stringify(state.pizza));
                localStorage.setItem('price', JSON.stringify(state.totalPrice));
            }
            if (state.totalPrice === 0) {
                localStorage.removeItem('cartId');
            }
        },
        removeItemInOrder(state, action: PayloadAction<string>) {
            if (state.pizza.some((item: IPizza) => item._id === action.payload)) {
                state.pizza.forEach((item, index) => {
                    if (item._id === action.payload && item.count) {
                        state.pizza.splice(index, 1);
                        state.totalPrice = state.totalPrice - item.price * item.count;
                        localStorage.setItem('pizza', JSON.stringify(state.pizza));
                        localStorage.setItem('price', state.totalPrice.toString());
                        localStorage.removeItem('cartId');
                    }
                });
            }
            if (state.totalPrice === 0) {
                localStorage.removeItem('cartId');
            }
        },
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
        clearAll(state) {
            state.pizza = [];
            state.totalPrice = 0;
            localStorage.removeItem('pizza');
            localStorage.removeItem('price');
            localStorage.removeItem('cartId');
        },
        deleteOrderItem(state, action: PayloadAction<number>) {
            state.items.splice(state.items.findIndex((item) => {
                return item.orderNumber === action.payload;
            }), 1);
        },
        initCart(state) {
            state.pizza = JSON.parse(localStorage.getItem('pizza')!);
            state.totalPrice = +localStorage.getItem('price')!;
        }
    }
});

export const {
    addItemInOrder,
    deleteItemInOrder,
    removeItemInOrder,
    fetchOrdersSuccess,
    fetchingOrder,
    fetchOrderError,
    clearAll,
    appendedOrder,
    deleteOrderItem,
    initCart,
} = orderSlice.actions;

export default orderSlice.reducer;
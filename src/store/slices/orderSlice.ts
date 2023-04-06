import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPizza} from "../../models/models";
import {IOrder, OrderResponse} from '../../models/order/models';

// type PizzaGeneral = {
//     id: string;
//     totalPrice: number;
// }
//
// type Pizza = PizzaGeneral & {
//     title: string;
//     description: string;
//     img: string;
// }

// type PizzaWithCount = Pizza & { count: number };

interface OrderState {
    loading: boolean;
    error: string;
    pizza: IPizza[];
    totalPrice: number;
    items: IOrder[]
}

const initialState: OrderState = {
    loading: false,
    error: '',
    pizza: [],
    totalPrice: 0,
    items: []
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
            }
        },
        removeItemInOrder(state, action: PayloadAction<string>) {
            if (state.pizza.some((item: IPizza) => item._id === action.payload)) {
                state.pizza.forEach((item, index) => {
                    if (item._id === action.payload && item.count) {
                        state.pizza.splice(index, 1);
                        state.totalPrice = state.totalPrice - item.price * item.count;
                    }
                });
            }
        },
        fetchOrdersSuccess (state, action: PayloadAction<OrderResponse[]>){
            state.loading = false;
            state.items = action.payload;
        },
        fetchingOrder(state){
            state.loading = true;
        },
        appendedOrder(state) {
            state.loading = false;
        },
        fetchOrderError(state, action: PayloadAction<Error>){
            state.loading = false;
            state.error = action.payload.message;
        },
        clearAll(state) {
            state.pizza = [];
            state.totalPrice = 0;
        },
        deleteOrderItem(state, action: PayloadAction<number>) {
            state.items.splice(state.items.findIndex((item) => {
                return item.orderNumber === action.payload;
            }), 1);
        }
    }
});

export const {addItemInOrder, deleteItemInOrder, removeItemInOrder, fetchOrdersSuccess, fetchingOrder, fetchOrderError, clearAll, appendedOrder, deleteOrderItem} = orderSlice.actions;

export default orderSlice.reducer;
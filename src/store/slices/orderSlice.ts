import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPizza} from "../../models/models";

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
    pizza: IPizza[];
    totalPrice: number;
}

const initialState: OrderState = {
    pizza: [],
    totalPrice: 0
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
        // addItemInOrder(state, action: PayloadAction<Pizza>) {
        //     if (!state.pizza.some((item: IPizza) => item._id === action.payload.id)) {
        //         state.pizza.push({...action.payload, count: 1});
        //     } else {
        //         state.pizza.forEach(item => {
        //             if (item.id === action.payload.id) {
        //                 item.count++;
        //             }
        //         });
        //     }
        //     state.totalPrice = state.totalPrice + action.payload.totalPrice;
        // },
        // deleteItemInOrder(state, action: PayloadAction<PizzaGeneral>) {
        //     if (state.pizza.some((item: PizzaWithCount) => item.id === action.payload.id)) {
        //         state.pizza.forEach((item, index) => {
        //             if (item.id === action.payload.id) {
        //                 if (item.count >= 2) {
        //                     item.count--;
        //                 } else {
        //                     state.pizza.splice(index, 1);
        //                 }
        //             }
        //         });
        //         state.totalPrice = state.totalPrice - action.payload.totalPrice;
        //     }
        // },
        // removeItemInOrder(state, action: PayloadAction<string>) {
        //     if (state.pizza.some((item: PizzaWithCount) => item.id === action.payload)) {
        //         state.pizza.forEach((item, index) => {
        //             if (item.id === action.payload) {
        //                 state.pizza.splice(index, 1);
        //                 state.totalPrice = state.totalPrice - item.totalPrice * item.count;
        //             }
        //         });
        //     }
        // },
        clearAll(state) {
            state.pizza = [];
            state.totalPrice = 0;
        }
    }
});

export const {addItemInOrder, deleteItemInOrder, removeItemInOrder, clearAll} = orderSlice.actions;

export default orderSlice.reducer;
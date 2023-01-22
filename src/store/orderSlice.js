import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        pizza: [],
        price: 0
    },
    reducers: {
        addItemInOrder(state, action) {
            if (!state.pizza.some(item => item.id === action.payload.id)) {
                state.pizza.push({...action.payload, count: 1});
            } else {
                state.pizza.forEach(item => {
                    if (item.id === action.payload.id) {
                        item.count++;
                    }
                });
            }
            state.price = state.price + +action.payload.price;
        },
        deleteItemInOrder(state, action) {
            if (state.pizza.some(item => item.id === action.payload.id)) {
                state.pizza.forEach((item, index) => {
                    if (item.id === action.payload.id) {
                        if (item.count >= 2) {
                            item.count--;
                        } else {
                            state.pizza.splice(index, 1);
                        }
                    }
                });
                state.price = state.price - +action.payload.price;
            }
        },
        removeItemInOrder(state, action) {
            if (state.pizza.some(item => item.id === action.payload.id)) {
                state.pizza.forEach((item, index) => {
                    if (item.id === action.payload.id) {
                        state.pizza.splice(index, 1);
                        state.price = state.price - item.price * item.count;
                    }
                });
            }
        },
        clearAll(state){
            state.pizza = [];
            state.price = 0;
        }
    }
});

export const {addItemInOrder, deleteItemInOrder, removeItemInOrder, clearAll} = orderSlice.actions;

export default orderSlice.reducer;
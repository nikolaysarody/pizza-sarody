import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        pizzas: [],
        price: 0
    },
    reducers: {
        addItemInOrder(state, action) {
            if (!state.pizzas.some(item => item.id === action.payload.id)) {
                state.pizzas.push({...action.payload, count: 1});
            } else {
                state.pizzas.forEach(item => {
                    if (item.id === action.payload.id) {
                        item.count++;
                    }
                });
            }
            state.price = state.price + +action.payload.price;
        },
        deleteItemInOrder(state, action) {
            if (state.pizzas.some(item => item.id === action.payload.id)) {
                state.pizzas.forEach((item, index) => {
                    if (item.id === action.payload.id) {
                        if (item.count >= 2){
                            item.count--;
                        } else {
                            state.pizzas.splice(index, 1);
                        }
                    }
                });
                state.price = state.price - +action.payload.price;
            }
        }
    }
});

export const {addItemInOrder, deleteItemInOrder} = orderSlice.actions;

export default orderSlice.reducer;
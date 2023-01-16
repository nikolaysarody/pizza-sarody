import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        pizzas: [],
        price: 0
    },
    reducers: {
        addItemInOrder(state, action){
            state.pizzas.push(action.payload);
            state.price = state.price + +action.payload.price;
        },
        deleteItemInOrder(state, action){
            state.pizzas.some((item, index) => {
                if (item.id === action.payload.id) {
                    state.pizzas.splice(index, 1);
                    state.price = state.price - +action.payload.price;
                    return true;
                }
            });
        }
    }
});

export const {addItemInOrder, deleteItemInOrder} = orderSlice.actions;

export default orderSlice.reducer;
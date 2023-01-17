import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        pizzas: [],
        pizzasCount: {},
        price: 0
    },
    reducers: {
        addItemInOrder(state, action){
            state.pizzas.push(action.payload);
            state.price = state.price + +action.payload.price;

            if (!Object.keys(state.pizzasCount).includes(action.payload.id)){
                state.pizzasCount[action.payload.id] = 1;
            } else {
                const count = state.pizzas[action.payload.id];
                state.pizzasCount[action.payload.id] = count + 1;
            }
        },
        deleteItemInOrder(state, action){
            state.pizzas.some((item, index) => {
                if (item.id === action.payload.id) {
                    state.pizzas.splice(index, 1);
                    state.price = state.price - +action.payload.price;
                    return true;
                }
            });
            if (Object.keys(state.pizzasCount).includes(action.payload.id)){
                const count = state.pizzasCount[action.payload.id];
                state.pizzasCount[action.payload.id] = count - 1;
                if (state.pizzasCount[action.payload.id] === 0){
                    delete state.pizzasCount[action.payload.id];
                }
            }
        }
    }
});

export const {addItemInOrder, deleteItemInOrder} = orderSlice.actions;

export default orderSlice.reducer;
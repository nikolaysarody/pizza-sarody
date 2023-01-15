import {createSlice} from "@reduxjs/toolkit";

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: [],
    reducers: {
        updatePizzas(state, action){
            state = action.payload;
        },
    }
});

export const {updatePizzas} = pizzaSlice.actions;

export default pizzaSlice.reducer;
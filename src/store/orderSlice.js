import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: [],
    reducers: {
        addItemInOrder(state, action){
            state.push(action.payload);
            state.forEach((item) => {console.log(item.title, 'state')})
            console.log(action.payload, 'action');
        },
        deleteItemInOrder(state, action){
            // state.filter();
            state.some((item, index) => {
                console.log(item.id, 'item');
                console.log(action.payload);
                if (item.id === action.payload) {
                    state.splice(index, 1);
                    return true;
                }
            });
        }
    }
});

export const {addItemInOrder, deleteItemInOrder} = orderSlice.actions;

export default orderSlice.reducer;
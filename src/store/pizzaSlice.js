import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import PizzaService from "../components/services/pizzaService";

const pizzaService = new PizzaService();

export const getPizza = createAsyncThunk(
    'pizza/getPizza',
    async(_, {rejectWithValue, dispatch}) => {
        const res = pizzaService.getPizza();
        dispatch(updatePizzas(res));
    }
);

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
        pizza: []
    },
    reducers: {
        updatePizzas(state, action){
            // console.log(action.payload);
            state.pizza = action.payload;
            // console.log(state.pizza);
        },
    },
});

export const {updatePizzas} = pizzaSlice.actions;

export default pizzaSlice.reducer;
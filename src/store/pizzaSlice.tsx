import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import PizzaService from "../components/services/pizzaService";

export const getPizza = createAsyncThunk(
    'pizza/getPizza',
    async(_, {rejectWithValue, dispatch}) => {
        const res: Pizza[] = new PizzaService().getPizza();
        dispatch(updatePizzas(res));
    }
);

type Pizza = {
    title: string;
    description: string;
    img: string;
    id: string;
    price: number;
}

type PizzaState = {
    pizza: Pizza[]
}

const initialState: PizzaState = {
    pizza: []
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        updatePizzas(state, action: PayloadAction<Pizza[]>){
            state.pizza = action.payload;
        },
    },
});

export const {updatePizzas} = pizzaSlice.actions;

export default pizzaSlice.reducer;
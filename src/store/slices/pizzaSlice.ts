import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IPizza } from '../../models/pizza';

interface PizzaState {
    loading: boolean;
    error: string;
    pizza: IPizza[];
}

const initialState: PizzaState = {
    loading: false,
    error: '',
    pizza: [],
};

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        fetchingPizza(state) {
            state.loading = true;
        },
        fetchPizzaSuccess(state, action: PayloadAction<IPizza[]>) {
            state.loading = false;
            state.pizza = action.payload;
        },
        fetchPizzaError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export const { fetchingPizza, fetchPizzaSuccess, fetchPizzaError } = pizzaSlice.actions;

export default pizzaSlice.reducer;

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// import PizzaService from "../../components/services/pizzaService";
import {IPizza} from "../../models/models";

// export const getPizza = createAsyncThunk(
//     'pizza/getPizza',
//     async(_, {rejectWithValue, dispatch}) => {
//         const res: Pizza[] = new PizzaService().getPizza();
//         dispatch(updatePizzas(res));
//     }
// );

// type Pizza = {
//     title: string;
//     description: string;
//     img: string;
//     id: string;
//     price: number;
// }

interface PizzaState {
    loading: boolean;
    error: string;
    pizza: IPizza[];
}

const initialState: PizzaState = {
    loading: false,
    error: '',
    pizza: [],
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        // updatePizzas(state, action: PayloadAction<Pizza[]>){
        //     state.pizza = action.payload;
        // },
        fetchingPizza(state){
            state.loading = true;
        },
        fetchPizzaSuccess(state, action: PayloadAction<IPizza[]>){
            state.loading = false;
            state.pizza = action.payload;
        },
        fetchPizzaError(state, action: PayloadAction<Error>){
            state.loading = false;
            state.error = action.payload.message;
        }
    },
});

export const {fetchingPizza, fetchPizzaSuccess, fetchPizzaError} = pizzaSlice.actions;

export default pizzaSlice.reducer;
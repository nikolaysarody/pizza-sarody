import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type PizzaGeneral = {
    id: string;
    price: number;
}

type Pizza = PizzaGeneral & {
    title: string;
    description: string;
    img: string;
}

type PizzaWithCount = Pizza & { count: number };

type Order = {
    pizza: PizzaWithCount[];
    price: number;
}

const initialState: Order = {
    pizza: [],
    price: 0
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItemInOrder(state, action: PayloadAction<Pizza>) {
            if (!state.pizza.some((item: PizzaWithCount) => item.id === action.payload.id)) {
                state.pizza.push({...action.payload, count: 1});
            } else {
                state.pizza.forEach(item => {
                    if (item.id === action.payload.id) {
                        item.count++;
                    }
                });
            }
            state.price = state.price + action.payload.price;
        },
        deleteItemInOrder(state, action: PayloadAction<PizzaGeneral>) {
            if (state.pizza.some((item: PizzaWithCount) => item.id === action.payload.id)) {
                state.pizza.forEach((item, index) => {
                    if (item.id === action.payload.id) {
                        if (item.count >= 2) {
                            item.count--;
                        } else {
                            state.pizza.splice(index, 1);
                        }
                    }
                });
                state.price = state.price - action.payload.price;
            }
        },
        removeItemInOrder(state, action: PayloadAction<string>) {
            if (state.pizza.some((item: PizzaWithCount) => item.id === action.payload)) {
                state.pizza.forEach((item, index) => {
                    if (item.id === action.payload) {
                        state.pizza.splice(index, 1);
                        state.price = state.price - item.price * item.count;
                    }
                });
            }
        },
        clearAll(state) {
            state.pizza = [];
            state.price = 0;
        }
    }
});

export const {addItemInOrder, deleteItemInOrder, removeItemInOrder, clearAll} = orderSlice.actions;

export default orderSlice.reducer;
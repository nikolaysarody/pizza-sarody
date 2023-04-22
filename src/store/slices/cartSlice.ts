import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPizza} from '../../models/pizza/models';

interface CartState {
    pizza: IPizza[];
    totalPrice: number;
}

const initialState: CartState = {
    pizza: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemInOrder(state, action: PayloadAction<IPizza>) {
            if (!state.pizza.some((item: IPizza) => item._id === action.payload._id)) {
                state.pizza.push({...action.payload, count: 1});
            } else {
                state.pizza.forEach(item => {
                    if (item._id === action.payload._id && item.count) {
                        item.count++;
                    }
                });
            }
            state.totalPrice = state.totalPrice + action.payload.price;
            localStorage.setItem('pizza', JSON.stringify(state.pizza));
            localStorage.setItem('price', JSON.stringify(state.totalPrice));
            localStorage.getItem('userId') ?
                localStorage.setItem('cartId', localStorage.getItem('userId')!) :
                localStorage.setItem('cartId', 'no-user');

        },
        deleteItemInOrder(state, action: PayloadAction<Pick<IPizza, '_id' | 'price'>>) {
            if (state.pizza.some((item: IPizza) => item._id === action.payload._id)) {
                state.pizza.forEach((item, index) => {
                    if (item._id === action.payload._id && item.count) {
                        if (item.count >= 2) {
                            item.count--;
                        } else {
                            state.pizza.splice(index, 1);
                        }
                    }
                });
                state.totalPrice = state.totalPrice - action.payload.price;
                localStorage.setItem('pizza', JSON.stringify(state.pizza));
                localStorage.setItem('price', JSON.stringify(state.totalPrice));
            }
            if (state.totalPrice === 0) {
                localStorage.removeItem('cartId');
            }
        },
        removeItemInOrder(state, action: PayloadAction<string>) {
            if (state.pizza.some((item: IPizza) => item._id === action.payload)) {
                state.pizza.forEach((item, index) => {
                    if (item._id === action.payload && item.count) {
                        state.pizza.splice(index, 1);
                        state.totalPrice = state.totalPrice - item.price * item.count;
                        localStorage.setItem('pizza', JSON.stringify(state.pizza));
                        localStorage.setItem('price', state.totalPrice.toString());
                        localStorage.removeItem('cartId');
                    }
                });
            }
            if (state.totalPrice === 0) {
                localStorage.removeItem('cartId');
            }
        },
        clearAll(state) {
            state.pizza = [];
            state.totalPrice = 0;
            localStorage.removeItem('pizza');
            localStorage.removeItem('price');
            localStorage.removeItem('cartId');
        },
        initCart(state) {
            state.pizza = JSON.parse(localStorage.getItem('pizza')!);
            state.totalPrice = +localStorage.getItem('price')!;
        }
    }
});

export const {
    addItemInOrder,
    deleteItemInOrder,
    removeItemInOrder,
    clearAll,
    initCart,
} = cartSlice.actions;

export default cartSlice.reducer;
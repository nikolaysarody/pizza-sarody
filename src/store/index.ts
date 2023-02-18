import {configureStore} from '@reduxjs/toolkit';
import orderSlice from "./slices/orderSlice";
import pizzaSlice from "./slices/pizzaSlice";

const store = configureStore({
    reducer: {
        order: orderSlice,
        pizza: pizzaSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


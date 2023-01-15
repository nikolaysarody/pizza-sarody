import {configureStore} from '@reduxjs/toolkit';
import orderSlice from "./orderSlice";
import pizzaSlice from "./pizzaSlice";

export default configureStore({
    reducer: {
        order: orderSlice,
        pizza: pizzaSlice,
    },
});


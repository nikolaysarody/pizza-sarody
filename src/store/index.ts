import {combineReducers, configureStore} from '@reduxjs/toolkit';
import orderSlice from "./slices/orderSlice";
import pizzaSlice from "./slices/pizzaSlice";
import actionSlice from './slices/actionSlice';
import authSlice from './slices/authSlice';
import addressSlice from './slices/addressSlice';

const rootReducer = combineReducers({
    order: orderSlice,
    pizza: pizzaSlice,
    action: actionSlice,
    auth: authSlice,
    address: addressSlice
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;


import { combineReducers, configureStore } from '@reduxjs/toolkit';
import orderSlice from '../../../../entities/Orders/model/slice/orderSlice';
import pizzaSlice from '../../../../entities/Pizza/model/slice/pizzaSlice';
import actionSlice from '../../../../entities/Promo/model/slice/actionSlice';
import authSlice from '../../../../widgets/UserPopUp/model/slice/authSlice';
import addressSlice from '../../../../widgets/Addresses/model/slice/addressSlice';
import userSlice from '../../../../features/Settings/model/slice/userSlice';
import promoSlice from '../../../../entities/Promo/model/slice/promoSlice';
import cartSlice from '../../../../entities/Cart/model/slice/cartSlice';

const rootReducer = combineReducers({
    order: orderSlice,
    data: pizzaSlice,
    action: actionSlice,
    auth: authSlice,
    address: addressSlice,
    user: userSlice,
    promo: promoSlice,
    cart: cartSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

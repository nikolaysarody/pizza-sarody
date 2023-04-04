import axiosApi from "../../axios/index";
import {AppDispatch} from "../index";
import OrderService from '../../services/orderService';
import {setAuth} from '../slices/authSlice';
import {getOrders} from '../slices/orderSlice';
// import {fetchingPizza, fetchPizzaError, fetchPizzaSuccess} from "../slices/pizzaSlice";

export const fetchOrders = (id: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await OrderService.get(id);
            dispatch(getOrders(res.data));
            // dispatch(fetchingPizza());
            // const res = await axiosApi.get('/order', {});
            // dispatch(fetchPizzaSuccess(res.data));
        } catch (e) {
            // dispatch(fetchPizzaError(e as Error));
        }
    }
}
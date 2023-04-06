import {AppDispatch} from "../index";
import OrderService from '../../services/orderService';
import {fetchingOrder, fetchOrdersSuccess, fetchOrderError, appendedOrder} from '../slices/orderSlice';
import {OrderResponse} from '../../models/order/models';

export const fetchOrders = (id: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingOrder());
            const res = await OrderService.get(id);
            dispatch(fetchOrdersSuccess(res.data));
        } catch (e) {
            dispatch(fetchOrderError(e as Error));
        }
    }
}

export const addOrder = (data: OrderResponse) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingOrder());
            const res = await OrderService.add(data);
            dispatch(appendedOrder());
            return res;
        } catch (e) {
            dispatch(fetchOrderError(e as Error));
        }
    }
}
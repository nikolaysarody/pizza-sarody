import {AppDispatch} from "../index";
import OrderService from '../../services/orderService';
import {fetchingOrder, fetchOrdersSuccess, fetchOrderError, appendedOrder} from '../slices/orderSlice';
import {IOrder} from '../../models/order/models';

export const fetchOrders = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingOrder());
            const res = await OrderService.getOrders();
            dispatch(fetchOrdersSuccess(res.data));
        } catch (e) {
            dispatch(fetchOrderError(e as Error));
        }
    }
}

export const addOrder = (data: IOrder) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingOrder());
            const res = await OrderService.addOrder(data);
            dispatch(appendedOrder());
            return res;
        } catch (e) {
            dispatch(fetchOrderError(e as Error));
        }
    }
}

export const cancelOrder = (orderNumber: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            await OrderService.cancelOrder(orderNumber);
        } catch (e) {
            dispatch(fetchOrderError(e as Error));
        }
    }
}

export const deleteOrder = (orderNumber: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            await OrderService.deleteOrder(orderNumber);
        } catch (e) {
            dispatch(fetchOrderError(e as Error));
        }
    }
}
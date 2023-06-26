import { isAxiosError } from 'axios';
import { type AppDispatch } from '../../../../app/providers/StoreProvider/config/store';
import OrderService from '../service/orderService';
import {
    appendedOrder, fetchingOrder, fetchOrderError, fetchOrdersSuccess,
} from '../slice/orderSlice';
import { type IOrder } from '../types/order';

export const fetchOrders = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingOrder());
            const res = await OrderService.getOrders();
            dispatch(fetchOrdersSuccess(res.data));
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchOrderError(e.response.data.message));
            }
        }
    };
};

export const addOrder = (data: IOrder) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingOrder());
            const res = await OrderService.addOrder(data);
            dispatch(appendedOrder());
            return res;
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchOrderError(e.response.data.message));
            }
            return null;
        }
    };
};

export const cancelOrder = (orderNumber: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            await OrderService.cancelOrder(orderNumber);
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchOrderError(e.response.data.message));
            }
        }
    };
};

export const deleteOrder = (orderNumber: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            await OrderService.deleteOrder(orderNumber);
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchOrderError(e.response.data.message));
            }
        }
    };
};

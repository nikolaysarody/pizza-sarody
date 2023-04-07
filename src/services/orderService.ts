import {AxiosResponse} from 'axios';
import axiosApi from '../axios';
import {IOrder, OrderResponse} from '../models/order/models';

export default class OrderService {
    static async getOrders(): Promise<AxiosResponse<OrderResponse[]>> {
        return axiosApi.get<OrderResponse[]>('/order/get');
    }

    static async addOrder(data: IOrder): Promise<AxiosResponse<OrderResponse>> {
        return axiosApi.post<OrderResponse>('/order/add', data);
    }

    static async cancelOrder(orderNumber: number): Promise<AxiosResponse<OrderResponse>> {
        return axiosApi.patch<OrderResponse>('/order/cancel', {orderNumber});
    }

    static async deleteOrder(orderNumber: number): Promise<AxiosResponse<OrderResponse>> {
        return axiosApi.post<OrderResponse>('/order/delete', {orderNumber});
    }
}
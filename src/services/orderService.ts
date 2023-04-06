import {AxiosResponse} from 'axios';
import axiosApi from '../axios';
import {OrderResponse} from '../models/order/models';

export default class OrderService {
    static async getOrder(userId: string): Promise<AxiosResponse<OrderResponse[]>> {
        return axiosApi.post<OrderResponse[]>('/order', {userId});
    }

    static async addOrder(data: OrderResponse): Promise<AxiosResponse<OrderResponse>> {
        return axiosApi.post<OrderResponse>('/order/add', data);
    }

    static async cancelOrder(orderNumber: number): Promise<AxiosResponse<OrderResponse>> {
        const userId = localStorage.getItem('id');
        return axiosApi.patch<OrderResponse>('/order/cancel', {userId, orderNumber});
    }

}
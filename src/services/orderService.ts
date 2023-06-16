import { type AxiosResponse } from 'axios';
import $api from '../shared/api/api';
import { type IOrder, type OrderResponse } from '../models/order/models';

export default class OrderService {
    static async getOrders(): Promise<AxiosResponse<OrderResponse[]>> {
        return $api.get<OrderResponse[]>('/order/get');
    }

    static async addOrder(data: IOrder): Promise<AxiosResponse<OrderResponse>> {
        return $api.post<OrderResponse>('/order/add', data);
    }

    static async cancelOrder(orderNumber: number): Promise<AxiosResponse<OrderResponse>> {
        return $api.patch<OrderResponse>('/order/cancel', { orderNumber });
    }

    static async deleteOrder(orderNumber: number): Promise<AxiosResponse<OrderResponse>> {
        return $api.post<OrderResponse>('/order/delete', { orderNumber });
    }
}

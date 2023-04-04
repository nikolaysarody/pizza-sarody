import {AxiosResponse} from 'axios';
import axiosApi from '../axios';
import {OrderResponse} from '../models/order/models';

export default class OrderService {
    static async get(userId: string): Promise<AxiosResponse<OrderResponse[]>> {
        return axiosApi.post<OrderResponse[]>('/order', {userId});
    }

    // static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    //     return axiosApi.post<AuthResponse>('/auth/registration', {email, password});
    // }
    //
    // static async logout(refreshToken: string): Promise<void> {
    //     return axiosApi.post('/auth/logout', {refreshToken});
    // }
}
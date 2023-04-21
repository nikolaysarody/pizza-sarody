import {AxiosResponse} from 'axios';
import axiosApi from '../axios';
import {IPromo} from '../models/order/models';

export default class PromoService {
    static async checkPromo(title: string): Promise<AxiosResponse<IPromo>> {
        return axiosApi.post<IPromo>('/promo/check', {title});
    }
}
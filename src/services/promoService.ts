import { type AxiosResponse } from 'axios';
import $api from '../shared/api/api';
import { type IPromo } from '../models/order/models';

export default class PromoService {
    static async checkPromo(title: string): Promise<AxiosResponse<IPromo>> {
        return $api.post<IPromo>('/promo/check', { title });
    }
}

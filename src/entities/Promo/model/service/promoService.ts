import { type AxiosResponse } from 'axios';
import axiosApi from '../../../../shared/lib/axios';
import { type IPromo } from '../../../Orders/model/types/order';

export default class PromoService {
    static async checkPromo(title: string): Promise<AxiosResponse<IPromo>> {
        return axiosApi.post<IPromo>('/promo/check', { title });
    }
}

import { type AxiosResponse } from 'axios';
import $api from '../shared/api/api';
import { type AddressResponse, type IAddress } from '../models/address/models';

export default class AddressService {
    static async getAddresses(): Promise<AxiosResponse<AddressResponse[]>> {
        return $api.get<AddressResponse[]>('/address/get');
    }

    static async addAddress(data: IAddress): Promise<AxiosResponse<AddressResponse>> {
        return $api.post<AddressResponse>('/address/add', data);
    }

    static async deleteAddress(id: string): Promise<AxiosResponse<AddressResponse[]>> {
        return $api.post<AddressResponse[]>('/address/delete', { id });
    }

    static async setDefaultAddress(id: string): Promise<AxiosResponse<AddressResponse[]>> {
        return $api.post<AddressResponse[]>('/address/set-default-address', { id });
    }
}

import { type AxiosResponse } from 'axios';
import axiosApi from '../../../../shared/lib/axios';
import { type AddressResponse, type IAddress } from '../types/address';

export default class AddressService {
    static async getAddresses(): Promise<AxiosResponse<AddressResponse[]>> {
        return axiosApi.get<AddressResponse[]>('/address/get');
    }

    static async addAddress(data: IAddress): Promise<AxiosResponse<AddressResponse>> {
        return axiosApi.post<AddressResponse>('/address/add', data);
    }

    static async deleteAddress(id: string): Promise<AxiosResponse<AddressResponse[]>> {
        return axiosApi.post<AddressResponse[]>('/address/delete', { id });
    }

    static async setDefaultAddress(id: string): Promise<AxiosResponse<AddressResponse[]>> {
        return axiosApi.post<AddressResponse[]>('/address/set-default-address', { id });
    }
}

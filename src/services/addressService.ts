import {AxiosResponse} from 'axios';
import axiosApi from '../axios';
import {AddressResponse, IAddress} from '../models/address/models';

export default class AddressService {
    static async getAddresses(): Promise<AxiosResponse<AddressResponse[]>> {
        return axiosApi.get<AddressResponse[]>('/address/get');
    }

    static async addAddress(data: IAddress): Promise<AxiosResponse<AddressResponse>> {
        return axiosApi.post<AddressResponse>('/address/add', data);
    }

    static async deleteAddress(id: string): Promise<AxiosResponse<AddressResponse>> {
        return axiosApi.post<AddressResponse>('/address/delete', {id});
    }
}
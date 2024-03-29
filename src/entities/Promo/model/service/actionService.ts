import { type AxiosResponse } from 'axios';
import axiosApi from '../../../../shared/lib/axios';
import { type IAction } from '../types/action';

export default class ActionService {
    static async getActions(): Promise<AxiosResponse<IAction[]>> {
        return axiosApi.get<IAction[]>('/action');
    }
}

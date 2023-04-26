import { type AxiosResponse } from 'axios';
import axiosApi from '../axios';
import { type IAction } from '../models/action/models';

export default class ActionService {
    static async getActions(): Promise<AxiosResponse<IAction[]>> {
        return axiosApi.get<IAction[]>('/action');
    }
}

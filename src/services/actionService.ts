import {AxiosResponse} from 'axios';
import axiosApi from '../axios';
import {IAction} from '../models/action/models';

export default class ActionService {
    static async getActions(): Promise<AxiosResponse<IAction[]>> {
        return axiosApi.get<IAction[]>('/action');
    }
}
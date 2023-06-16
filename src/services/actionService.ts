import { type AxiosResponse } from 'axios';
import $api from '../shared/api/api';
import { type IAction } from '../models/action/models';

export default class ActionService {
    static async getActions(): Promise<AxiosResponse<IAction[]>> {
        return $api.get<IAction[]>('/action');
    }
}

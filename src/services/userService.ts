import {AxiosResponse} from 'axios';
import axiosApi from '../axios';
import {AuthResponse} from '../models/auth/models';

export default class UserService {
    static async changeUsername(username: string): Promise<AxiosResponse<AuthResponse>> {
        return axiosApi.post<AuthResponse>('/user/change-username', {username});
    }

    static async changeEmail(email: string): Promise<AxiosResponse<AuthResponse>> {
        return axiosApi.post<AuthResponse>('/user/change-email', {email});
    }
}

import {AxiosResponse} from 'axios';
import {AuthResponse} from '../models/models';
import axiosApi from '../axios';

export default class AuthService {
    static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return axiosApi.post<AuthResponse>('/auth/login', {login, password});
    }

    static async registration(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return axiosApi.post<AuthResponse>('/auth/registration', {login, password});
    }

    static async logout(): Promise<void> {
        return axiosApi.post('/logout');
    }
}
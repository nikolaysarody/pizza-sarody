import {AxiosResponse} from 'axios';
import {AuthResponse} from '../models/models';
import axiosApi from '../axios';

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return axiosApi.post<AuthResponse>('/auth/login', {email, password});
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return axiosApi.post<AuthResponse>('/auth/registration', {email, password});
    }

    static async logout(refreshToken: string): Promise<void> {
        return axiosApi.post('/auth/logout', {refreshToken});
    }
}
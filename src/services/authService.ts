import { type AxiosResponse } from 'axios';
import axiosApi from '../shared/lib/axios';
import { type AuthResponse } from '../models/auth';

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return axiosApi.post<AuthResponse>('/auth/login', { email, password });
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return axiosApi.post<AuthResponse>('/auth/registration', { email, password });
    }

    static async logout(): Promise<void> {
        await axiosApi.get('/auth/logout');
    }
}

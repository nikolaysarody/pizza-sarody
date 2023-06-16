import { type AxiosResponse } from 'axios';
import $api from '../shared/api/api';
import { type AuthResponse } from '../models/auth/models';

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', { email, password });
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/registration', { email, password });
    }

    static async logout(): Promise<void> {
        await $api.get('/auth/logout');
    }
}

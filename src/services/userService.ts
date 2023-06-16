import { type AxiosResponse } from 'axios';
import $api from '../shared/api/api';
import { type AuthResponse } from '../models/auth/models';

export default class UserService {
    static async changeUsername(username: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/user/change-username', { username });
    }

    static async changeEmail(email: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/user/change-email', { email });
    }
}

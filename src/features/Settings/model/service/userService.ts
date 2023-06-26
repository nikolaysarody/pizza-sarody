import { type AxiosResponse } from 'axios';
import axiosApi from '../../../../shared/lib/axios';
import { type AuthResponse } from '../../../../widgets/UserPopUp/model/types/auth';

export default class UserService {
    static async changeUsername(username: string): Promise<AxiosResponse<AuthResponse>> {
        return axiosApi.post<AuthResponse>('/user/change-username', { username });
    }

    static async changeEmail(email: string): Promise<AxiosResponse<AuthResponse>> {
        return axiosApi.post<AuthResponse>('/user/change-email', { email });
    }
}

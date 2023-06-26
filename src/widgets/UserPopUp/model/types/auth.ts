import { type IUser } from '../../../../features/Settings/model/types/user';

export interface AuthResponse extends IUser {
    accessToken: string;
    refreshToken: string;
}

import { type IUser } from '../user/models';

export interface AuthResponse extends IUser {
    accessToken: string;
    refreshToken: string;
}

import { type IUser } from './user';

export interface AuthResponse extends IUser {
    accessToken: string;
    refreshToken: string;
}

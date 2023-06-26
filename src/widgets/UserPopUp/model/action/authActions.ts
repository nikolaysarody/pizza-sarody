import axios, { type AxiosResponse, isAxiosError } from 'axios';
import { type AppDispatch } from '../../../../app/providers/StoreProvider/config/store';
import AuthService from '../service/authService';
import { fetchAuthError, setAuth } from '../slice/authSlice';
import { type AuthResponse } from '../types/auth';
import { type IUser } from '../../../../features/Settings/model/types/user';
import { setUser } from '../../../../features/Settings/model/slice/userSlice';

const setItems = (res: AxiosResponse<AuthResponse>, dispatch: AppDispatch) => {
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('userId', res.data.id);
    localStorage.setItem('cartId', res.data.id);
    dispatch(setAuth(true));
    dispatch(setUser({ email: res.data.email, id: res.data.id, username: res.data.username }));
};

export const login = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await AuthService.login(email, password);
            dispatch(fetchAuthError(''));
            setItems(res, dispatch);
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchAuthError(e.response.data.message));
            }
        }
    };
};

export const registration = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await AuthService.registration(email, password);
            dispatch(fetchAuthError(''));
            setItems(res, dispatch);
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchAuthError(e.response.data.message));
            }
        }
    };
};

export const logout = () => {
    return async (dispatch: AppDispatch) => {
        try {
            await AuthService.logout();
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userId');
            dispatch(setAuth(false));
            dispatch(setUser({} as IUser));
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchAuthError(e.response.data.message));
            }
        }
    };
};

export const checkAuth = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await axios.get<AuthResponse>(`${process.env.REACT_APP_BASE_URL}/auth/refresh`, {
                withCredentials: true,
            });
            setItems(res, dispatch);
        } catch (e) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userId');
            dispatch(setAuth(false));
            dispatch(setUser({} as IUser));
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchAuthError(e.response.data.message));
            }
        }
    };
};

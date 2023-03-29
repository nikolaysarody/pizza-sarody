import {AppDispatch} from '../index';
import AuthService from '../../services/AuthService';
import {fetchAuthError, setAuth, setUser} from '../slices/authSlice';
import {AuthResponse, IUser} from '../../models/models';
import axios, {AxiosResponse, isAxiosError} from 'axios';

const setItems = (res: AxiosResponse<AuthResponse>, dispatch: AppDispatch) => {
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);
    localStorage.setItem('email', res.data.email);
    // localStorage.setItem('id', res.data.id);
    dispatch(setAuth(true));
    dispatch(setUser({email: res.data.email}));
}

export const login = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await AuthService.login(email, password);
            dispatch(fetchAuthError(''));
            setItems(res, dispatch);
        } catch (e) {
            if (isAxiosError(e) && e.response) {
                dispatch(fetchAuthError(e.response.data.message));
            }
        }
    }
}

export const registration = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await AuthService.registration(email, password);
            dispatch(fetchAuthError(''));
            setItems(res, dispatch);
        } catch (e) {
            if (isAxiosError(e) && e.response) {
                dispatch(fetchAuthError(e.response.statusText));
            }
            if (e instanceof Error)
                dispatch(fetchAuthError(e.message));
        }
    }
}

export const logout = () => {
    return async (dispatch: AppDispatch) => {
        try {
            await AuthService.logout(localStorage.getItem('refreshToken')!);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('email');
            // localStorage.removeItem('id');
            dispatch(setAuth(false));
            dispatch(setUser({} as IUser));
        } catch (e) {
            if (isAxiosError(e) && e.response) {
                dispatch(fetchAuthError(e.response.statusText));
            }
            if (e instanceof Error)
                dispatch(fetchAuthError(e.message));
        }
    }
}

export const checkAuth = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await axios.post<AuthResponse>(`${process.env.REACT_APP_BASE_URL}/auth/refresh`, {
                refreshToken: localStorage.getItem('refreshToken'),
                accessToken: localStorage.getItem('accessToken'),
                email: localStorage.getItem('email'),
                // id: localStorage.getItem('id')
            });
            setItems(res, dispatch);
        } catch (e) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('email');
            // localStorage.removeItem('id');
            if (isAxiosError(e) && e.response) {
                dispatch(fetchAuthError(e.response.statusText));
            }
            if (e instanceof Error)
                dispatch(fetchAuthError(e.message));
        }
    }
}
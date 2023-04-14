import {AppDispatch} from '../index';
import AuthService from '../../services/authService';
import {fetchAuthError, setAuth, setUser} from '../slices/authSlice';
import axios, {AxiosResponse, isAxiosError} from 'axios';
import {AuthResponse} from '../../models/auth/models';
import {IUser} from '../../models/user/models';

const setItems = (res: AxiosResponse<AuthResponse>, dispatch: AppDispatch) => {
    localStorage.setItem('accessToken', res.data.accessToken);
    dispatch(setAuth(true));
    dispatch(setUser({email: res.data.email, id: res.data.id}));
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
            await AuthService.logout();
            localStorage.removeItem('accessToken');
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
            const res = await axios.get<AuthResponse>(`${process.env.REACT_APP_BASE_URL}/auth/refresh`, {withCredentials: true});
            setItems(res, dispatch);
        } catch (e) {
            localStorage.removeItem('accessToken');
            dispatch(setAuth(false));
            dispatch(setUser({} as IUser));
            if (isAxiosError(e) && e.response) {
                dispatch(fetchAuthError(e.response.statusText));
            }
            if (e instanceof Error)
                dispatch(fetchAuthError(e.message));
        }
    }
}
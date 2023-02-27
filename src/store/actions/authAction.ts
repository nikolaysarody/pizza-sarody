import {AppDispatch} from "../index";
import AuthService from '../../services/AuthService';
import {fetchAuthError, setAuth, setUser} from '../slices/authSlice';
import {IUser} from '../../models/models';
import {AxiosError, isAxiosError} from 'axios';

export const login = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await AuthService.login(email, password);
            // console.log(res)
            localStorage.setItem('token', res.data.access_token);
            // localStorage.setItem('login', res.data.login);
            dispatch(setAuth(true));
            dispatch(setUser({_id: res.data._id, login: res.data.login}));
        } catch (e) {
            if(isAxiosError(e) && e.response){
                dispatch(fetchAuthError(e.response.statusText));
            }
            if(e instanceof Error)
                dispatch(fetchAuthError(e.message));
        }
    }
}

export const registration = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await AuthService.registration(email, password);
            localStorage.setItem('token', res.data.access_token);
            dispatch(setAuth(true));
            dispatch(setUser({_id: res.data._id, login: res.data.login}));
        } catch (e) {
            if(isAxiosError(e) && e.response){
                dispatch(fetchAuthError(e.response.statusText));
            }
            if(e instanceof Error)
            dispatch(fetchAuthError(e.message));
        }
    }
}

export const logout = () => {
    return async (dispatch: AppDispatch) => {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            dispatch(setAuth(false));
            dispatch(setUser({} as IUser));
        } catch (e) {
            if(isAxiosError(e) && e.response){
                dispatch(fetchAuthError(e.response.statusText));
            }
            if(e instanceof Error)
                dispatch(fetchAuthError(e.message));
        }
    }
}
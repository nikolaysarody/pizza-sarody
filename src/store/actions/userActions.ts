import {AppDispatch} from '../index';
import {isAxiosError} from 'axios';
import UserService from '../../services/userService';
import {fetchEmailError, fetchUsernameError, setLoad, setUser} from '../slices/userSlice';

export const changeUsername = (username: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await UserService.changeUsername(username);
            dispatch(setUser({...res.data, username}));
            dispatch(fetchUsernameError(''));
            dispatch(setLoad(true));
        } catch (e) {
            if (isAxiosError(e) && e.response) {
                dispatch(fetchUsernameError(e.response.data.message));
            }
        }
    }
}

export const changeEmail = (email: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await UserService.changeEmail(email);
            dispatch(setUser({...res.data, email}));
            dispatch(fetchEmailError(''));
            dispatch(setLoad(true));
        } catch (e) {
            if (isAxiosError(e) && e.response) {
                dispatch(fetchEmailError(e.response.data.message));
            }
        }
    }
}
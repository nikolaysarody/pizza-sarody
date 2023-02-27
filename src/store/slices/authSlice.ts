import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../models/models';
import {AxiosError} from 'axios';

interface AuthState {
    user: IUser;
    isAuth: boolean;
    error: string;
}

const initialState: AuthState = {
    user: {} as IUser,
    isAuth: false,
    error: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
        fetchAuthError(state, action: PayloadAction<String>) {
            if(action.payload){
                state.error = action.payload.toString();
            }
        }
    },
});

export const {setAuth, setUser, fetchAuthError} = authSlice.actions;

export default authSlice.reducer;
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../models/user/models';

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
            state.error = action.payload.toString();
        }
    },
});

export const {setAuth, setUser, fetchAuthError} = authSlice.actions;

export default authSlice.reducer;
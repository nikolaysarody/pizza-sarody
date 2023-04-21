import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
    isAuth: boolean;
    error: string;
}

const initialState: AuthState = {
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
        fetchAuthError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        }
    },
});

export const {setAuth, fetchAuthError} = authSlice.actions;

export default authSlice.reducer;
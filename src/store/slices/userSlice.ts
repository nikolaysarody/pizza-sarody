import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../models/user/models';

interface UserState {
    user: IUser;
    isAuth: boolean;
    error: string;
}

const initialState: UserState = {
    user: {} as IUser,
    isAuth: false,
    error: ''
}

const userSlice = createSlice({
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

export const {setAuth, setUser, fetchAuthError} = userSlice.actions;

export default userSlice.reducer;
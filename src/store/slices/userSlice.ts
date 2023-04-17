import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../models/user/models';

interface UserState {
    item: IUser;
    error: {
        username: string,
        email: string
    },
    load: boolean
}

const initialState: UserState = {
    item: {} as IUser,
    error: {
        username: '',
        email: ''
    },
    load: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.item = action.payload;
        },
        fetchUsernameError(state, action: PayloadAction<String>) {
            state.error.username = action.payload.toString();
        },
        fetchEmailError(state, action: PayloadAction<String>) {
            state.error.email = action.payload.toString();
        },
        setLoad(state, action: PayloadAction<boolean>) {
            state.load = action.payload;
        }
    },
});

export const {setUser, fetchUsernameError, fetchEmailError, setLoad} = userSlice.actions;

export default userSlice.reducer;
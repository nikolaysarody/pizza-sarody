import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAction} from '../../models/action/models';

interface ActionState {
    loading: boolean;
    error: string;
    action: IAction[];
}

const initialState: ActionState = {
    loading: false,
    error: '',
    action: [],
}

const actionSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        fetchingAction(state){
            state.loading = true;
        },
        fetchActionSuccess(state, action: PayloadAction<IAction[]>){
            state.loading = false;
            state.action = action.payload;
        },
        fetchActionError(state, action: PayloadAction<Error>){
            state.loading = false;
            state.error = action.payload.message;
        }
    },
});

export const {fetchingAction, fetchActionSuccess, fetchActionError} = actionSlice.actions;

export default actionSlice.reducer;
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddressResponse, IAddress} from '../../models/address/models';

interface AddressState {
    loading: boolean;
    error: string;
    items: IAddress[]
}

const initialState: AddressState = {
    loading: false,
    error: '',
    items: []
}

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        fetchAddressesSuccess(state, action: PayloadAction<AddressResponse[]>) {
            state.loading = false;
            state.items = action.payload;
        },
        fetchingAddress(state) {
            state.loading = true;
        },
        fetchAddressError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        },
        appendedAddress(state, action: PayloadAction<IAddress>) {
            state.loading = false;
            state.items.push(action.payload);
        },
        deleteAddressFromStore(state, action: PayloadAction<string>) {
            state.items.splice(state.items.findIndex((item) => item._id === action.payload), 1);
        }
    },
});

export const {fetchAddressesSuccess, fetchingAddress, fetchAddressError, appendedAddress, deleteAddressFromStore} = addressSlice.actions;

export default addressSlice.reducer;
import {AppDispatch} from "../index";
import {
    appendedAddress,
    fetchAddressError,
    fetchAddressesSuccess,
    fetchingAddress
} from '../slices/addressSlice';
import AddressService from '../../services/addressService';
import {IAddress} from '../../models/address/models';

export const fetchAddresses = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingAddress());
            const res = await AddressService.getAddresses();
            dispatch(fetchAddressesSuccess(res.data));
        } catch (e) {
            dispatch(fetchAddressError(e as Error));
        }
    }
}

export const addAddress = (data: IAddress) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingAddress());
            const res = await AddressService.addAddress(data);
            dispatch(appendedAddress(res.data));
        } catch (e) {
            dispatch(fetchAddressError(e as Error));
        }
    }
}

export const deleteAddress = (id: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingAddress());
            const res = await AddressService.deleteAddress(id);
            dispatch(fetchAddressesSuccess(res.data));
        } catch (e) {
            dispatch(fetchAddressError(e as Error));
        }
    }
}
export const setDefaultAddress = (id: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingAddress());
            const res = await AddressService.setDefaultAddress(id);
            dispatch(fetchAddressesSuccess(res.data));
        } catch (e) {
            dispatch(fetchAddressError(e as Error));
        }
    }
}
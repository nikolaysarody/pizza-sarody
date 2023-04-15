import axiosApi from "../../axios/index";
import {AppDispatch} from "../index";
import {fetchingAction, fetchActionSuccess, fetchActionError} from "../slices/actionSlice";
import {isAxiosError} from 'axios';

export const fetchAction = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingAction());
            const res = await axiosApi.get('/action');
            dispatch(fetchActionSuccess(res.data));
        } catch (e) {
            if (isAxiosError(e) && e.response) {
                dispatch(fetchActionError(e.response.data.message));
            }
        }
    }
}
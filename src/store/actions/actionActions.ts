import axiosApi from "../../axios/index";
import {AppDispatch} from "../index";
import {fetchingAction, fetchActionSuccess, fetchActionError} from "../slices/actionSlice";

export const fetchAction = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingAction());
            const res = await axiosApi.get('/action');
            dispatch(fetchActionSuccess(res.data));
        } catch (e) {
            dispatch(fetchActionError(e as Error));
        }
    }
}
import {AppDispatch} from "../index";
import {fetchingAction, fetchActionSuccess, fetchActionError} from "../slices/actionSlice";
import {isAxiosError} from 'axios';
import ActionService from '../../services/actionService';

export const fetchAction = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingAction());
            const res = await ActionService.getActions();
            dispatch(fetchActionSuccess(res.data));
        } catch (e) {
            if (isAxiosError(e) && e.response) {
                dispatch(fetchActionError(e.response.data.message));
            }
        }
    }
}
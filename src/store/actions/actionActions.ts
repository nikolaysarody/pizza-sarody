import { isAxiosError } from 'axios';
import { type AppDispatch } from '../index';
import { fetchingAction, fetchActionSuccess, fetchActionError } from '../slices/actionSlice';
import ActionService from '../../services/actionService';

const fetchAction = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingAction());
            const res = await ActionService.getActions();
            dispatch(fetchActionSuccess(res.data));
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchActionError(e.response.data.message));
            }
        }
    };
};

export default fetchAction;

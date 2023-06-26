import { isAxiosError } from 'axios';
import { type AppDispatch } from '../../../../app/providers/StoreProvider/config/store';
import { fetchingAction, fetchActionSuccess, fetchActionError } from '../slice/actionSlice';
import ActionService from '../service/actionService';

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

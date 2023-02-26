import axios from "../../axios/index";
import {AppDispatch} from "../index";
// import {IPizza} from "../../models/models";
import {fetchingAction, fetchActionSuccess, fetchActionError} from "../slices/actionSlice";

export const fetchAction = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingAction());
            const res = await axios.get('/action');
            dispatch(fetchActionSuccess(res.data));
        } catch (e) {
            dispatch(fetchActionError(e as Error));
        }
    }
}
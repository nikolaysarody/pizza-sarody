import {AppDispatch} from '../index';
import {isAxiosError} from 'axios';
import {fetchingPromo, fetchPromoError, fetchPromoSuccess} from '../slices/promoSlice';
import PromoService from '../../services/promoService';

export const checkPromo = (title: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingPromo());
            const res = await PromoService.checkPromo(title);
            dispatch(fetchPromoSuccess(res.data));
        } catch (e) {
            if (isAxiosError(e) && e.response) {
                dispatch(fetchPromoError(e.response.data.message));
            }
        }
    }
}
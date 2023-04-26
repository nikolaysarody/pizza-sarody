import { isAxiosError } from 'axios';
import { type AppDispatch } from '../index';
import { fetchingPromo, fetchPromoError, fetchPromoSuccess } from '../slices/promoSlice';
import PromoService from '../../services/promoService';

const checkPromo = (title: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingPromo());
            const res = await PromoService.checkPromo(title);
            dispatch(fetchPromoSuccess(res.data));
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchPromoError(e.response.data.message));
            }
        }
    };
};

export default checkPromo;

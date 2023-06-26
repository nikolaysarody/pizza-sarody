import { isAxiosError } from 'axios';
import { type AppDispatch } from '../../../../app/providers/StoreProvider/config/store';
import { fetchingPromo, fetchPromoError, fetchPromoSuccess } from '../slice/promoSlice';
import PromoService from '../service/promoService';

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

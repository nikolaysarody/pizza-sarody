import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPromo} from '../../models/order/models';

interface PromoState {
    loading: boolean;
    error: string;
    item: IPromo;
}

const initialState: PromoState = {
    loading: false,
    error: '',
    item: {} as IPromo
}

const promoSlice = createSlice({
    name: 'promo',
    initialState,
    reducers: {
        fetchingPromo(state) {
            state.loading = true;
        },
        fetchPromoSuccess(state, action: PayloadAction<IPromo>) {
            state.loading = false;
            state.item = action.payload;
            state.error = '';
        },
        fetchPromoError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const {fetchingPromo, fetchPromoSuccess, fetchPromoError} = promoSlice.actions;

export default promoSlice.reducer;
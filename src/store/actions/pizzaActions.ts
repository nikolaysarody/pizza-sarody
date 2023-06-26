import { isAxiosError } from 'axios';
import axiosApi from '../../shared/lib/axios/index';
import { type AppDispatch } from '../index';
import { fetchingPizza, fetchPizzaError, fetchPizzaSuccess } from '../slices/pizzaSlice';

const fetchPizza = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingPizza());
            const res = await axiosApi.get('/pizza');
            dispatch(fetchPizzaSuccess(res.data));
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchPizzaError(e.response.data.message));
            }
        }
    };
};

export default fetchPizza;

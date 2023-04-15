import axiosApi from "../../axios/index";
import {AppDispatch} from "../index";
import {fetchingPizza, fetchPizzaError, fetchPizzaSuccess} from "../slices/pizzaSlice";
import {isAxiosError} from 'axios';

export const fetchPizza = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingPizza());
            const res = await axiosApi.get('/pizza');
            dispatch(fetchPizzaSuccess(res.data));
        } catch (e) {
            if (isAxiosError(e) && e.response) {
                dispatch(fetchPizzaError(e.response.data.message));
            }
        }
    }
}
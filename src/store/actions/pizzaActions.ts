import axiosApi from "../../axios/index";
import {AppDispatch} from "../index";
import {fetchingPizza, fetchPizzaError, fetchPizzaSuccess} from "../slices/pizzaSlice";

export const fetchPizza = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingPizza());
            const res = await axiosApi.get('/pizza');
            dispatch(fetchPizzaSuccess(res.data));
        } catch (e) {
            dispatch(fetchPizzaError(e as Error));
        }
    }
}
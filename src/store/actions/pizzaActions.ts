import axios from "../../axios/index";
import {AppDispatch} from "../index";
// import {IPizza} from "../../models/models";
import {fetchingPizza, fetchPizzaError, fetchPizzaSuccess} from "../slices/pizzaSlice";

export const fetchPizza = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingPizza());
            const res = await axios.get('/pizza');
            // console.log(res)
            dispatch(fetchPizzaSuccess(res.data));
        } catch (e) {
            dispatch(fetchPizzaError(e as Error));
        }
    }
}
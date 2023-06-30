import { RootState } from '../../../../app/providers/StoreProvider/config/store';

export const getPizzaInCart = (state: RootState) => state.pizza.pizza;

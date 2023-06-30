import { RootState } from '../../../../app/providers/StoreProvider/config/store';

export const getPizzaInCart = (state: RootState) => state.cart.pizza;

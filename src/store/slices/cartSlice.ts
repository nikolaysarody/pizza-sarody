import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IPizza } from '../../models/pizza/models';
import { type IPromo } from '../../models/order/models';

interface CartState {
    pizza: IPizza[];
    totalPrice: number;
    promo: IPromo;
    error: string;
}

const initialState: CartState = {
    pizza: [],
    totalPrice: 0,
    promo: {
        title: '', discount: 0, items: [], img: '', description: '',
    },
    error: '',
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemInCart(state, action: PayloadAction<IPizza>) {
            if (!state.pizza.some((item: IPizza) => item.title === action.payload.title)) {
                state.pizza.push({ ...action.payload, count: 1 });
            } else {
                state.pizza.forEach((item) => {
                    if (item.title === action.payload.title && item.count !== undefined) {
                        item.count += 1;
                    }
                });
            }
            state.totalPrice += action.payload.price;
            localStorage.setItem('pizza', JSON.stringify(state.pizza));
            localStorage.setItem('price', JSON.stringify(state.totalPrice));
            const userId = localStorage.getItem('userId');
            if (userId !== null) {
                localStorage.setItem('cartId', userId);
            } else {
                localStorage.setItem('cartId', 'no-user');
            }
        },
        deleteItemInCart(state, action: PayloadAction<Pick<IPizza, 'title' | 'price'>>) {
            if (state.pizza.some((item: IPizza) => item.title === action.payload.title)) {
                state.pizza.forEach((item, index) => {
                    if (item.title === action.payload.title && item.count !== undefined) {
                        if (item.count >= 2) {
                            item.count -= 1;
                        } else {
                            state.pizza.splice(index, 1);
                        }
                    }
                });
                state.totalPrice -= action.payload.price;
                localStorage.setItem('pizza', JSON.stringify(state.pizza));
                localStorage.setItem('price', JSON.stringify(state.totalPrice));
            }
            if (state.totalPrice === 0) {
                localStorage.removeItem('cartId');
            }
        },
        removeItemInCart(state, action: PayloadAction<string>) {
            if (state.pizza.some((item: IPizza) => item.title === action.payload)) {
                state.pizza.forEach((item, index) => {
                    if (item.title === action.payload && item.count !== undefined) {
                        state.pizza.splice(index, 1);
                        state.totalPrice -= item.price * item.count;
                        localStorage.setItem('pizza', JSON.stringify(state.pizza));
                        localStorage.setItem('price', state.totalPrice.toString());
                        localStorage.removeItem('cartId');
                    }
                });
            }
            if (state.totalPrice === 0) {
                localStorage.removeItem('cartId');
            }
        },
        clearAllCart(state) {
            state.pizza = [];
            state.totalPrice = 0;
            state.promo = {
                title: '', discount: 0, items: [], img: '', description: '',
            };
            state.error = '';
            localStorage.removeItem('pizza');
            localStorage.removeItem('price');
            localStorage.removeItem('cartId');
            localStorage.removeItem('promo');
            localStorage.removeItem('promoError');
        },
        initCart(state) {
            state.pizza = JSON.parse(localStorage.getItem('pizza') || '{}');
            state.promo = JSON.parse(localStorage.getItem('promo') || '{}');
            state.error = JSON.parse(localStorage.getItem('promoError') || '{}');
            const price = localStorage.getItem('price');
            state.totalPrice = price ? +price : 0;
        },
        appendPromoToCart(state, action: PayloadAction<IPromo>) {
            if (!state.promo.title) {
                state.promo = action.payload;
                localStorage.setItem('promo', JSON.stringify(state.promo));
            } else {
                state.error = 'Вы не можете добавить больше одного промокода';
                localStorage.setItem('promoError', JSON.stringify(state.error));
            }
        },
        appendPromoItemsToCart(state, action: PayloadAction<IPromo>) {
            const { items, discount } = action.payload;
            if (!state.promo.title) {
                state.promo = action.payload;
                state.pizza.push({
                    ...items[0],
                    title: `${items[0].title} Акция`,
                    count: items.length,
                    price: (items[0].price / 100) * discount,
                    isPromo: true,
                });
                state.totalPrice += ((items[0].price * items.length) / 100) * discount;
                localStorage.setItem('promo', JSON.stringify(state.promo));
                localStorage.setItem('pizza', JSON.stringify(state.pizza));
                localStorage.setItem('price', JSON.stringify(state.totalPrice));
                localStorage.setItem('cartId', localStorage.getItem('userId') || 'no-user');
            } else {
                state.error = 'Вы не можете добавить больше одного промокода';
                localStorage.setItem('promoError', JSON.stringify(state.error));
            }
        },
        removePromoFromCart(state) {
            if (state.promo.items.length > 0) {
                state.pizza.splice(
                    state.pizza.findIndex((item) => {
                        if (item.count && item.isPromo) {
                            state.totalPrice -= item.price * item.count;
                            if (state.totalPrice === 0) {
                                localStorage.removeItem('cartId');
                            }
                        }
                        return item.isPromo;
                    }),
                    1,
                );
            }
            state.promo = {} as IPromo;
            state.error = '';
            localStorage.removeItem('promo');
            localStorage.removeItem('promoError');
        },
    },
});

export const {
    addItemInCart,
    deleteItemInCart,
    removeItemInCart,
    clearAllCart,
    initCart,
    appendPromoToCart,
    appendPromoItemsToCart,
    removePromoFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;

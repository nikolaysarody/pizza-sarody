import { useState } from 'react';
import { createPortal } from 'react-dom';
import exitButton from '../../../../shared/assets/icons/exit.svg';
import blackExitButton from '../../../../shared/assets/icons/close_black.png';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/hooks/hooks';
import { type IPromo } from '../../../../models/order';
import './PromoModal.scss';
import pizzaImg from '../../../../shared/assets/icons/accept_order.png';
import { appendPromoItemsToCart, appendPromoToCart } from '../../../../store/slices/cartSlice';

interface PromoModalProps extends IPromo {
    onClose: () => void;
}

const PromoModal = (props: PromoModalProps) => {
    const {
        onClose,
        title = '',
        img = '',
        expire,
        items,
        discount,
        description = '',
    } = props;
    const modalPortal = document.getElementById('modal');
    const error = useAppSelector((state) => state.promo.error);
    const cartError = useAppSelector((state) => state.cart.error);
    const [isAppended, setAppended] = useState<string>('');
    const dispatch = useAppDispatch();

    return modalPortal
        ? createPortal(
            <div
                className="promo-modal"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        onClose();
                        setAppended('');
                    }
                }}
            >
                {error === '' ? (
                    <div className="promo-modal__wrapper">
                        <div className="promo-modal__top">
                            <img className="promo-modal__top-img" src={img} alt={title} />
                            <div className="promo-modal__top-img-filter" />
                            <button
                                type="button"
                                className="promo-modal__top-exit-btn"
                                onClick={() => {
                                    onClose();
                                    setAppended('');
                                }}
                            >
                                <img src={exitButton} alt="exit" />
                            </button>
                            <span className="promo-modal__top-title">Промокод</span>
                            <span className="slider-modal__top-description">{title.toUpperCase()}</span>
                        </div>
                        <div className="promo-modal__down">
                            <span className="promo-modal__down-text">{description}</span>
                            <input
                                className="promo-modal__down-btn"
                                type="button"
                                value="Добавить"
                                onClick={() => {
                                    if (cartError === '') {
                                        setAppended('Добавлено');
                                        if (items.length > 0) {
                                            dispatch(
                                                appendPromoItemsToCart({
                                                    title,
                                                    img,
                                                    description,
                                                    expire,
                                                    items,
                                                    discount,
                                                }),
                                            );
                                        } else {
                                            dispatch(
                                                appendPromoToCart({
                                                    title,
                                                    img,
                                                    description,
                                                    expire,
                                                    items,
                                                    discount,
                                                }),
                                            );
                                        }
                                    } else {
                                        setAppended(cartError);
                                    }
                                }}
                            />
                            <span className="promo-modal__down-append">{isAppended}</span>
                        </div>
                    </div>
                ) : (
                    <div className="promo-modal__wrapper">
                        <button
                            type="button"
                            className="promo-modal__top-exit-btn"
                            onClick={() => {
                                onClose();
                            }}
                        >
                            <img src={blackExitButton} alt="exit" />
                        </button>
                        <div className="promo-modal__container">
                            <img className="promo-modal__container-img" src={pizzaImg} alt={title} />
                            <span className="promo-modal__container-title">{error}</span>
                        </div>
                    </div>
                )}
            </div>,
            modalPortal,
        )
        : null;
};

export default PromoModal;

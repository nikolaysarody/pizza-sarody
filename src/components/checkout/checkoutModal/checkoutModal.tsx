import React from 'react';
import exitButton from '../../../icons/close_black.png';
import './checkoutModal.scss';
import {createPortal} from 'react-dom';
import {useNavigate} from 'react-router-dom';
import pizzaImg from '../../../icons/accept_order.png';
import {clearAll} from '../../../store/slices/orderSlice';
import {useAppDispatch} from '../../../hook';

interface CheckoutModalProps {
    title: string;
    visible: boolean,
    onClose: () => void,
    isAccept: boolean
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({title, visible, onClose, isAccept}) => {
    const dispatch = useAppDispatch();
    const modalPortal = document.getElementById('modal');
    const navigate = useNavigate();

    if (visible) {
        return modalPortal ? createPortal(
            <div className="checkout-modal" onClick={(e) => {
                if (e.target === e.currentTarget && isAccept) {
                    onClose();
                    dispatch(clearAll());
                    return navigate('/orders');
                }
                onClose();
            }}>
                <div className="checkout-modal__wrapper">
                    <img className="checkout-modal__top-exit-btn" src={exitButton}
                         alt="exit"
                         onClick={() => {
                             onClose();
                             if (isAccept) {
                                 dispatch(clearAll());
                                 navigate('/orders');
                             }
                         }}
                    />
                    <div className="checkout-modal__container">
                        <img className="checkout-modal__container-img" src={pizzaImg} alt={title}/>
                        <span className="checkout-modal__container-title">{title}</span>
                    </div>
                </div>
            </div>, modalPortal
        ) : null;
    } else {
        return null;
    }
}

export default CheckoutModal;
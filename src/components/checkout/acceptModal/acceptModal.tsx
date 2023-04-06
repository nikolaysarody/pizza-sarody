import React from 'react';
import exitButton from '../../../icons/close_black.png';
import './acceptModal.scss';
import {createPortal} from 'react-dom';
import {useNavigate} from 'react-router-dom';
import pizzaImg from '../../../icons/accept_order.png';
import {clearAll} from '../../../store/slices/orderSlice';
import {useAppDispatch} from '../../../hook';

interface AcceptModalProps {
    orderNumber: number;
    visible: boolean,
    onClose: () => void
}

const AcceptModal: React.FC<AcceptModalProps> = ({orderNumber, visible, onClose}) => {
    const dispatch = useAppDispatch();
    const modalPortal = document.getElementById('modal');
    const navigate = useNavigate();

    if (visible) {
        return modalPortal ? createPortal(
            <div className="accept-modal" onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                    dispatch(clearAll());
                    return navigate("/orders");
                }
            }}>
                <div className="accept-modal__wrapper">
                    <img className="accept-modal__top-exit-btn" src={exitButton}
                         alt="exit"
                         onClick={() => {
                             onClose();
                             dispatch(clearAll());
                             navigate("/orders");
                         }}
                    />
                    <div className="accept-modal__container">
                        <img className="accept-modal__container-img" src={pizzaImg} alt={orderNumber.toString()}/>
                        <span className="accept-modal__container-title">Заказ №{orderNumber} принят!</span>
                    </div>

                </div>
            </div>, modalPortal
        ) : null;
    } else {
        return null;
    }
}

export default AcceptModal;
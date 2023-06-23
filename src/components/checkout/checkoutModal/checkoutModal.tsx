import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import exitButton from '../../../icons/close_black.png';
import './checkoutModal.scss';
import pizzaImg from '../../../icons/accept_order.png';
import { useAppDispatch } from '../../../hook';
import { clearAllCart } from '../../../store/slices/cartSlice';

interface CheckoutModalProps {
    title: string;
    onClose: () => void;
    isAccept: boolean;
}

const CheckoutModal = ({ title, onClose, isAccept }: CheckoutModalProps) => {
    const dispatch = useAppDispatch();
    const modalPortal = document.getElementById('modal');
    const navigate = useNavigate();

    return modalPortal
        ? createPortal(
            <div
                className="checkout-modal"
                onClick={(e) => {
                    if (e.target === e.currentTarget && isAccept) {
                        onClose();
                        dispatch(clearAllCart());
                        navigate('/orders');
                        return;
                    }
                    onClose();
                }}
            >
                <div className="checkout-modal__wrapper">
                    <button
                        type="button"
                        className="checkout-modal__top-exit-btn"
                        onClick={() => {
                            onClose();
                            if (isAccept) {
                                dispatch(clearAllCart());
                                navigate('/orders');
                            }
                        }}
                    >
                        <img src={exitButton} alt="exit" />
                    </button>
                    <div className="checkout-modal__container">
                        <img className="checkout-modal__container-img" src={pizzaImg} alt={title} />
                        <span className="checkout-modal__container-title">{title}</span>
                    </div>
                </div>
            </div>,
            modalPortal,
        )
        : null;
};

export default CheckoutModal;

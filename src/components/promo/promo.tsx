import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import checkPromo from '../../store/actions/promoActions';
import PromoModal from './promoModal/promoModal';
// import EnterImg from '../../shared/assets/icons/enter.svg';
import './promo.scss';

const Promo = () => {
    const dispatch = useAppDispatch();
    const promo = useAppSelector((state) => state.promo.item);
    const [promoTitle, setPromoTitle] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <div className="promo">
            {modalVisible ? (
                <PromoModal
                    onClose={() => {
                        setModalVisible(false);
                    }}
                    {...promo}
                />
            ) : null}
            <input
                type="text"
                placeholder="Промокод"
                value={promoTitle}
                onChange={(e) => {
                    setPromoTitle(e.target.value);
                }}
            />
            <button
                type="button"
                className="promo__btn"
                onClick={() => {
                    if (promoTitle !== '') {
                        dispatch(checkPromo(promoTitle));
                        setModalVisible(true);
                    }
                }}
            >
                {/* <EnterImg /> */}
            </button>
        </div>
    );
};

export default Promo;

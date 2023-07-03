import { memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/hooks/hooks';
import enterImg from '../../../../shared/assets/icons/enter.svg';
import checkPromo from '../../model/action/promoActions';
import PromoModal from '../PromoModal/PromoModal';
import './Promo.scss';
import { classNames } from '../../../../shared/lib/classNames/classNames';

interface PromoProps {
    className?: string;
}

export const Promo = memo(({ className }:PromoProps) => {
    const dispatch = useAppDispatch();
    const promo = useAppSelector((state) => state.promo.item);
    const [promoTitle, setPromoTitle] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <div className={classNames('promo', {}, [className])}>
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
                <img src={enterImg} alt="enter" width="13" height="13" />
            </button>
        </div>
    );
});

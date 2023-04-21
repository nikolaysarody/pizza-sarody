import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hook';
import enterImg from '../../icons/enter.svg';
import './promo.scss';
import PromoModal from './promoModal/promoModal';
import {checkPromo} from '../../store/actions/promoActions';

const Promo: React.FC = () => {
    const dispatch = useAppDispatch();
    const promo = useAppSelector(state => state.promo.item);
    const [promoTitle, setPromoTitle] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <div className="promo">
            <PromoModal visible={modalVisible}
                        onClose={() => setModalVisible(false)}
                        {...promo}/>
            <input type="text"
                   placeholder="Промокод"
                   value={promoTitle}
                   onChange={(e) => setPromoTitle(e.target.value)}/>
            <button onClick={() => {
                if (promoTitle !== '') {
                    dispatch(checkPromo(promoTitle));
                    setModalVisible(true);
                }
            }}>
                <img src={enterImg} alt="enter" width="13" height="13"/>
            </button>
        </div>
    );
}

export default Promo;
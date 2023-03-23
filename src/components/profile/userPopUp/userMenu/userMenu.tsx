import React, {useState} from 'react';
import {login, logout, registration} from '../../../../store/actions/authActions';
import {useAppDispatch} from '../../../../hook';
import {Link} from 'react-router-dom';

const UserMenu: React.FC = () => {
    const dispatch = useAppDispatch();
    // const [userEmail, setUserEmail] = useState<string>('');
    // const [userPassword, setUserPassword] = useState<string>('');

    return (
        // <div className="popup__outside-wrapper">
            <div className="popup__container">
                <div className="popup__section">
                    <div className="popup__section-title">
                        <Link to="/profile/settings">Настройки</Link>
                    </div>
                </div>
                <div className="popup__section">
                    <div className="popup__section-title">
                        <Link to="/profile/orders">Заказы</Link>
                    </div>
                </div>
                <div className="popup__section">
                    <div className="popup__section-title">
                        <Link to="/profile/address">Адреса доставки</Link>
                    </div>
                </div>
                <div className="popup__section">
                    <input className="popup__btn-login"
                           type="button"
                           value="Выйти"
                           onClick={() => {
                               dispatch(logout());
                           }}/>
                </div>
            </div>
        // </div>
    )
}

export default UserMenu;
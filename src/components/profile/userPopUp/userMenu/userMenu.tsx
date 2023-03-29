import React from 'react';
import {logout} from '../../../../store/actions/authActions';
import {useAppDispatch} from '../../../../hook';
import {Link} from 'react-router-dom';
import {IUserPopUp} from '../../../../models/models';

const UserMenu: React.FC<IUserPopUp> = ({popUpSwitch}) => {
    const dispatch = useAppDispatch();

    return (
        <div className="popup__container">
            <div className="popup__section">
                <div className="popup__section-title">
                    <Link to="/settings" onClick={() => popUpSwitch()}>Настройки</Link>
                </div>
            </div>
            <div className="popup__section">
                <div className="popup__section-title">
                    <Link to="/orders" onClick={() => popUpSwitch()}>Заказы</Link>
                </div>
            </div>
            <div className="popup__section">
                <div className="popup__section-title">
                    <Link to="/addresses" onClick={() => popUpSwitch()}>Адреса доставки</Link>
                </div>
            </div>
            <div className="popup__section">
                <input className="popup__btn-login"
                       type="button"
                       value="Выйти"
                       onClick={() => {
                           dispatch(logout());
                           popUpSwitch();
                       }}/>
            </div>
        </div>
    )
}

export default UserMenu;
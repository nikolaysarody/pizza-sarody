import React, {useState} from 'react';
import {useAppDispatch} from '../../../hook';
import {Link} from 'react-router-dom';

const ProfileNav: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="profile-nav__container">
            <div className="profile-nav__section">
                <Link to="/profile/settings">Настройки</Link>
            </div>
            <div className="profile-nav__section">
                <Link to="/profile/orders">Заказы</Link>
            </div>
            <div className="profile-nav__section">
                <Link to="/profile/addresses">Адреса доставки</Link>
            </div>
        </div>
    )
}

export default ProfileNav;
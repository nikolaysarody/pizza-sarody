import React, {useState} from 'react';
// import {useAppDispatch} from '../../../hook';
import {Link} from 'react-router-dom';
import {Pages} from '../../../models/models';
import './profileNav.scss';

interface IProfileNav {
    page: Pages
}

const ProfileNav: React.FC<IProfileNav> = ({page}) => {
    return (
        <div className="profile-nav__container">
            <div className="profile-nav__section">
                <Link className={`profile-nav__section-link${page === Pages.Settings ? '-current' : ''}`} to="/settings">Настройки</Link>
            </div>
            <div className="profile-nav__section">
                <Link className={`profile-nav__section-link${page === Pages.Orders ? '-current' : ''}`} to="/orders">Заказы</Link>
            </div>
            <div className="profile-nav__section">
                <Link className={`profile-nav__section-link${page === Pages.Addresses ? '-current' : ''}`} to="/addresses">Адреса доставки</Link>
            </div>
        </div>
    )
}

export default ProfileNav;
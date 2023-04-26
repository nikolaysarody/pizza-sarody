import React from 'react';
import { Link } from 'react-router-dom';
import './profileNav.scss';
import { Pages } from '../../../models/user/models';

function ProfileNav({ page }: { page: Pages }): JSX.Element {
    return (
        <div className="profile-nav__container">
            <div className="profile-nav__section">
                <Link
                    className={`profile-nav__section-link${page === Pages.Settings ? '-current' : ''}`}
                    to="/settings"
                >
                    Настройки
                </Link>
            </div>
            <div className="profile-nav__section">
                <Link className={`profile-nav__section-link${page === Pages.Orders ? '-current' : ''}`} to="/orders">
                    Заказы
                </Link>
            </div>
            <div className="profile-nav__section">
                <Link
                    className={`profile-nav__section-link${page === Pages.Addresses ? '-current' : ''}`}
                    to="/addresses"
                >
                    Адреса доставки
                </Link>
            </div>
        </div>
    );
}

export default ProfileNav;

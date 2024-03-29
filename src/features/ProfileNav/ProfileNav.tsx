import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Pages } from '../Settings/model/types/user';
import './ProfileNav.scss';

interface ProfileNavProps {
    page: Pages;
}

const ProfileNav = memo(({ page }: ProfileNavProps) => {
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
});

export default ProfileNav;

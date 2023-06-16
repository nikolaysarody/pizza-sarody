import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import LogoImg from '../../shared/assets/icons/logo.svg';
import Cart from '../cart/cart';
import UserPopUp from '../profile/userPopUp/userPopUp';
import Promo from '../promo/promo';
import SideNav from './sideNav/sideNav';

const Header = () => {
    if (window.innerWidth < 962) {
        return (
            <div className="header">
                <SideNav />
            </div>
        );
    }
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__section">
                    <div className="header__logo">
                        <Link to="/">
                            <LogoImg width="200" height="46" />
                        </Link>
                    </div>
                </div>
                <div className="header__section">
                    <div className="header__button">
                        <Link to="/">Пицца</Link>
                    </div>
                    <div className="header__button">
                        <Link to="/about">О нас</Link>
                    </div>
                    <Promo />
                    <div className="header__profile">
                        <UserPopUp />
                    </div>
                    <div className="header__cart">
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

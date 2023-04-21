import React from 'react';
import './header.scss';
import logoImg from '../../icons/logo.svg';
import {Link} from 'react-router-dom';
import Cart from '../cart/cart';
import SideNav from './sideNav/sideNav';
import UserPopUp from '../profile/userPopUp/userPopUp';
import Promo from '../promo/promo';


const Header: React.FC = () => {
    if (window.innerWidth < 962) {
        return (
            <div className="header">
                <SideNav/>
            </div>
        );
    } else {
        return (
            <div className="header">
                <div className="header__container">
                    <div className="header__section">
                        <div className="header__logo">
                            <Link to="/">
                                <img src={logoImg} alt="Pizza Sarody" width="200" height="46"/>
                            </Link>
                        </div>
                    </div>
                    <div className="header__section">
                        <div className="header__button">
                            <Link to="/">Пицца</Link>
                        </div>
                        <div className="header__button">
                            <Link to="#">Акции</Link>
                        </div>
                        <div className="header__button">
                            <Link to="/about">О нас</Link>
                        </div>
                        <Promo/>
                        <div className="header__profile">
                            <UserPopUp/>
                        </div>
                        <div className="header__cart">
                            <Cart/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
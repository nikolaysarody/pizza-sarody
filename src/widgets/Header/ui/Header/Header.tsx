import { Link } from 'react-router-dom';
import logoImg from '../../../../shared/assets/icons/logo.svg';
import { Cart } from '../../../../entities/Cart';
import { UserPopUp } from '../../../UserPopUp';
import { Promo } from '../../../../entities/Promo';
import Sidenav from '../Sidenav/Sidenav';
import { HeaderItem } from '../HeaderItem/HeaderItem';
import './Header.scss';

export const Header = () => {
    if (window.innerWidth < 962) {
        return (
            <div className="header">
                <Sidenav />
            </div>
        );
    }
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__section">
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logoImg} alt="Pizza Sarody" width="200" height="46" />
                        </Link>
                    </div>
                </div>
                <div className="header__section">
                    <HeaderItem title="Пицца" to="/" />
                    <HeaderItem title="О нас" to="/about" />
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

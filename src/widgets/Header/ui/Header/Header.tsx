import { Link } from 'react-router-dom';
import logoImg from '../../../../shared/assets/icons/logo.svg';
import { Cart } from '../../../../entities/Cart';
import { UserPopUp } from '../../../UserPopUp';
import { Promo } from '../../../../entities/Promo';
import Sidenav from '../Sidenav/Sidenav';
import { HeaderItem } from '../HeaderItem/HeaderItem';
import './Header.scss';

export const Header = () => {
    if (window.innerWidth < 767) {
        return (
            <div className="header">
                <Sidenav />
            </div>
        );
    }
    return (
        <header className="header">
            <nav className="header__container">
                <section className="header__section">
                    <Link className="header__logo" to="/">
                        <img src={logoImg} alt="Pizza Sarody" width="200" height="46" />
                    </Link>
                </section>
                <section className="header__section">
                    <HeaderItem title="Пицца" to="/" />
                    <HeaderItem title="О нас" to="/about" />
                    <Promo />
                    <div className="header__profile">
                        <UserPopUp />
                    </div>
                    <div className="header__cart">
                        <Cart />
                    </div>
                </section>
            </nav>
        </header>
    );
};

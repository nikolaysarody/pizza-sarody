import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../../shared/assets/icons/logo-min.svg';
import menuImg from '../../../../shared/assets/icons/menu.svg';
import enterImg from '../../../../shared/assets/icons/enter.svg';
import { useAppSelector } from '../../../../shared/lib/hooks/hooks';
import { classNames, Mods } from '../../../../shared/lib/classNames/classNames';
import './Sidenav.scss';
import '../Header/Header.scss';

const Sidenav = () => {
    const [sideNavSwitch, setSideNavSwitch] = useState(false);
    const pizzas = useAppSelector((state) => state.cart.pizza);
    const [count, setCount] = useState(0);
    const [mods, setMods] = useState<Mods>({ open: false });

    useEffect(() => {
        setCount(0);
        pizzas.forEach((item) => {
            setCount((prev) => prev + (item.count || 0));
        });
    }, [pizzas]);

    useEffect(() => {
        setMods({ sidebar_open: sideNavSwitch });
    }, [sideNavSwitch]);

    return (
        <aside className="header__container">
            <section className="header__section">
                <Link className="header__logo" to="/">
                    <img src={logoImg} alt="Pizza Sarody" />
                </Link>
            </section>
            <section className="header__section">
                <button
                    type="button"
                    className="sidebar__burger"
                    onClick={() => {
                        setSideNavSwitch((prev) => !prev);
                    }}
                >
                    <img src={menuImg} alt="menu" />
                </button>
                <div className={classNames('sidebar', mods, [])}>
                    <div className="sidebar__wrapper">
                        <Link className="sidebar__button" to="/">Пицца</Link>
                        <Link className="sidebar__button" to="/about">О нас</Link>
                        <Link className="sidebar__button" to="/profile">Профиль</Link>
                        <Link className="sidebar__button" to="/order">Корзина</Link>
                        {count > 0 && (
                            <span className="counter">{count}</span>
                        )}
                        <div className="header__promo">
                            <input type="text" placeholder="Промокод" />
                            <button type="button">
                                <img src={enterImg} alt="enter" width="13" height="13" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
    );
};

export default Sidenav;

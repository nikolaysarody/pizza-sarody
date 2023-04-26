import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../icons/logo.svg';
import menuImg from '../../../icons/menu.svg';
import enterImg from '../../../icons/enter.svg';
import './sideNav.scss';
import '../header.scss';
import { useAppSelector } from '../../../hook';

function SideNav(): JSX.Element {
    const [sideNavSwitch, setSideNavSwitch] = useState(false);
    const pizzas = useAppSelector((state) => state.cart.pizza);
    const [count, setCount] = useState(0);
    const sideNav = useRef<HTMLDivElement>(null);

    useEffect(() => {
        pizzas.forEach((item) => {
            if (item.count) {
                setCount((prev) => prev + 1);
            }
        });
    }, [pizzas]);

    useEffect(() => {
        if (sideNav.current != null) {
            if (sideNavSwitch) {
                sideNav.current.style.transform = `translateX(-0)`;
            } else {
                sideNav.current.style.transform = `translateX(${window.getComputedStyle(sideNav.current).width})`;
            }
        }
    }, [sideNavSwitch]);

    const cartCounter = () => {
        if (count) {
            return (
                <div className="header__counter">
                    <span>{count}</span>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="header__container">
            <div className="header__section">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logoImg} alt="Pizza Sarody" />
                    </Link>
                </div>
            </div>
            <div className="header__section">
                <button
                    type="button"
                    className="header__side-nav-btn-menu"
                    onClick={() => {
                        setSideNavSwitch((prev) => !prev);
                    }}
                >
                    <img src={menuImg} alt="menu" />
                </button>
                <div className="header__side-nav" ref={sideNav}>
                    <div className="header__side-nav-wrapper">
                        <div className="header__button">
                            <Link to="/">Пицца</Link>
                        </div>
                        <div className="header__button">
                            <Link to="/about">О нас</Link>
                        </div>
                        <div className="header__button">
                            <Link to="/profile">Профиль</Link>
                        </div>
                        <div className="header__button">
                            <Link to="/order">Корзина</Link>
                            {cartCounter()}
                        </div>
                        <div className="header__promo">
                            <input type="text" placeholder="Промокод" />
                            <button type="button">
                                <img src={enterImg} alt="enter" width="13" height="13" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;

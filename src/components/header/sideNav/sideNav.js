import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import logoMinImg from "../logo-min.svg";
import logoImg from '../logo.svg';
import menuImg from "../menu.svg";
import enterImg from "../enter.svg";
import './sideNav.scss';
import '../header.scss';

function SideNav() {
    const [sideNavSwitch, setSideNavSwitch] = useState(false);
    const sideNav = useRef(null);

    useEffect(() => {
        if(sideNavSwitch){
            sideNav.current.style.transform = `translateX(-0)`;
        } else {
            sideNav.current.style.transform = `translateX(${window.getComputedStyle(sideNav.current).width})`;
        }
    }, [sideNavSwitch]);

    return (
        <div className='header__container'>
            <div className='header__section'>
                <div className='header__logo'>
                    <Link to='/'>
                        <img src={logoImg} alt='Pizza Sarody'/>
                    </Link>
                </div>
            </div>
            <div className='header__section'>
                <img className='header__side-nav-btn-menu'
                     src={menuImg}
                     alt='menu'
                     onClick={() => setSideNavSwitch(prev => !prev)}
                />
                <div className='header__side-nav' ref={sideNav}>
                    <div className='header__side-nav-wrapper'>
                        <div className='header__button'>
                            <Link to='/'>Пицца</Link>
                        </div>
                        <div className='header__button'>
                            <Link to='#'>Акции</Link>
                        </div>
                        <div className='header__button'>
                            <Link to='/about'>О нас</Link>
                        </div>
                        <div className='header__button'>
                            <Link to='/profile'>Профиль</Link>
                        </div>
                        <div className='header__button'>
                            <Link to='/order'>Корзина</Link>
                        </div>
                        <div className='header__promo'>
                            <input type='text' placeholder='Промокод'/>
                            <button>
                                <img src={enterImg} alt='enter' width='13' height='13'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
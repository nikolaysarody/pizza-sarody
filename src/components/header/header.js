import React, {useEffect, useState} from 'react';
import './header.scss';
import logoImg from './logo.svg';
import userImg from './user.svg';
import enterImg from './enter.svg';
import {Link} from "react-router-dom";
import Cart from '../cart/cart';
import SideNav from "./sideNav/sideNav";


function Header() {
    const [container, setContainer] = useState(null);

    useEffect(() => {
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    const checkSize = () => {
        if (window.innerWidth < 962) {
            setContainer(() => (
                <SideNav/>
            ));
        } else {
            setContainer(() => (
                <div className='header__container'>
                    <div className='header__section'>
                        <div className='header__logo'>
                            <Link to='/'>
                                <img src={logoImg} alt='Pizza Sarody' width='200' height='46'/>
                            </Link>
                        </div>
                    </div>
                    <div className='header__section'>
                        <div className='header__button'>
                            <Link to='/'>Пицца</Link>
                        </div>
                        <div className='header__button'>
                            <Link to='#'>Акции</Link>
                        </div>
                        <div className='header__button'>
                            <Link to='/about'>О нас</Link>
                        </div>
                        <div className='header__promo'>
                            <input type='text' placeholder='Промокод'/>
                            <button>
                                <img src={enterImg} alt='enter' width='13' height='13'/>
                            </button>
                        </div>
                        <div className='header__button'>
                            <img src={userImg} alt='user' width='22' height='22'/>
                        </div>
                        <div className='header__cart'>
                            <Cart/>
                        </div>
                    </div>
                </div>
            ));
        }
    }

    return (
        <div className='header'>
            {container}
        </div>
    );
}

export default Header;
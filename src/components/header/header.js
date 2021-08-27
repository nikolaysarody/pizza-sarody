import React from 'react';
import './header.scss';
import logoImg from './logo.svg';
import userImg from './user.svg';
import cartImg from '../cart/cart.svg';
import enterImg from './enter.svg';
import {Link} from "react-router-dom";
import Cart from '../cart/cart';
import CartMenu from '../cart/cartMenu/cartMenu';

function Header(){
    return (
        <div className='header'>
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
                        <Link to={{pathname: '/', hash: 'pizza'}}>Пицца</Link>
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
                        {/*<span>{user.name}</span>*/}
                    </div>
                    <div className='header__cart'>
                        {/*<CartMenu/>*/}
                        <Cart />

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;
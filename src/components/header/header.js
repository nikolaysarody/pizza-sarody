import React from 'react';
import './header.scss';
import logoImg from './logo.svg';
import userImg from './user.svg';
import cartImg from './cart.svg';
import enterImg from './enter.svg';

function Header(){
    return (
        <div className='header'>
            <div className='header__container'>
                <div className='header__section'>
                    <div className='header__logo'>
                        <img src={logoImg} alt='Pizza Sarody' width='200' height='46'/>
                    </div>
                </div>
                <div className='header__section'>
                    <div className='header__button'>
                        <a href='#'>Пицца</a>
                    </div>
                    <div className='header__button'>
                        <a href='#'>Акции</a>
                    </div>
                    <div className='header__button'>
                        <a href='#'>О нас</a>
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
                    <div className='header__button'>
                        <img src={cartImg} alt='cart' width='24' height='24'/>
                        {/*<span>{user.name}</span>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
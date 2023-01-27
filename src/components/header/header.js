import React, {useEffect, useRef, useState} from 'react';
import './header.scss';
import logoImg from './logo.svg';
// import logoMinImg from './logo-min.svg';
import userImg from './user.svg';
import enterImg from './enter.svg';
// import menuImg from './menu.svg';
import {Link} from "react-router-dom";
import Cart from '../cart/cart';
import SideNav from "./sideNav/sideNav";


function Header() {
    const [container, setContainer] = useState(null);
    // const [sideNavSwitch, setSideNavSwitch] = useState(false);
    // const [offset, setOffset] = useState(0);
    // const sideNav = useRef(null);
    // const [sideNav, ]

    // useEffect(() => {
    //     console.log(sideNavSwitch)
    //     if(sideNavSwitch){
    //         console.log(sideNav.current.style)
    //         sideNav.current.style.transform = `translateX(${window.getComputedStyle(sideNav.current).width})`;
    //     } else {
    //         sideNav.current.style.transform = `translateX(-${window.getComputedStyle(sideNav.current).width})`;
    //     }
    // }, [sideNavSwitch]);

    const checkSize = () => {
        if (window.innerWidth < 962) {
            setContainer(() => (
                <SideNav/>
                // <div className='header__container'>
                //     <div className='header__section'>
                //         <div className='header__logo'>
                //             <Link to='/'>
                //                 <img src={logoMinImg} alt='Pizza Sarody'/>
                //             </Link>
                //         </div>
                //     </div>
                //     <div className='header__section'>
                //         <img className='header__side-nav-btn-menu'
                //              src={menuImg}
                //              alt='menu'
                //              onClick={() => setSideNavSwitch(prev => !prev)}
                //         />
                //         <div className='header__side-nav' ref={sideNav}>
                //             <div className='header__side-nav-wrapper'>
                //                 <div className='header__button'>
                //                     <Link to='/'>Пицца</Link>
                //                 </div>
                //                 <div className='header__button'>
                //                     <Link to='#'>Акции</Link>
                //                 </div>
                //                 <div className='header__button'>
                //                     <Link to='/about'>О нас</Link>
                //                 </div>
                //                 <div className='header__button'>
                //                     <Link to='/profile'>Профиль</Link>
                //                 </div>
                //                 <div className='header__button'>
                //                     <Link to='/order'>Корзина</Link>
                //                 </div>
                //                 <div className='header__promo'>
                //                     <input type='text' placeholder='Промокод'/>
                //                     <button>
                //                         <img src={enterImg} alt='enter' width='13' height='13'/>
                //                     </button>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
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

    useEffect(() => {
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);


    return (
        <div className='header'>
            {container}
        </div>
    );
}

export default Header;
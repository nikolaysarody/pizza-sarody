import React, {useEffect, useState} from 'react';
import './footer.scss';
import SideNav from "../header/sideNav/sideNav";
import {Link} from "react-router-dom";
import logoImg from "../header/logo.svg";
import enterImg from "../header/enter.svg";
import userImg from "../header/user.svg";
import Cart from "../cart/cart";

function Footer() {
    const [container, setContainer] = useState(null);

    useEffect(() => {
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    const checkSize = () => {
        if (window.innerWidth < 962) {
            setContainer(() => (
                <div className='footer__container'>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <a href='#'>Пицца</a>
                        </div>
                        <div className='footer__button'>
                            <a href='#'>Акции</a>
                        </div>
                    </div>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <a href='#'>О нас</a>
                        </div>
                        <div className='footer__button'>
                            <a href='#'>Корзина</a>
                        </div>
                    </div>
                    {/*<div className='footer__section'>*/}
                    {/*    <div className='footer__copyright'>*/}
                    {/*        <span>© {new Date().getFullYear()} Pizza Sarody</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <a href='https://github.com/nikolaysarody/pizza-sarody'
                               target='_blank'>github.com/nikolaysarody/<br/>pizza-sarody</a>
                        </div>
                    </div>
                </div>
            ));
        } else {
            setContainer(() => (
                <div className='footer__container'>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <a href='#'>Пицца</a>
                        </div>
                    </div>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <a href='#'>Акции</a>
                        </div>
                    </div>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <a href='#'>О нас</a>
                        </div>
                    </div>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <a href='#'>Корзина</a>
                        </div>
                    </div>
                    {/*<div className='footer__section'>*/}
                    {/*    <div className='footer__copyright'>*/}
                    {/*        <span>© {new Date().getFullYear()} Pizza Sarody</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <a href='https://github.com/nikolaysarody/pizza-sarody'
                               target='_blank'>github.com/nikolaysarody/pizza-sarody</a>
                        </div>
                    </div>
                </div>
            ));
        }
    }

    return (
        <div className='footer'>
            {container}
        </div>
    );
}

export default Footer;
import React from 'react';
import './footer.scss';

function Footer() {
    return (
        <div className='footer'>
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
                </div>
                <div className='footer__section'>
                    <div className='footer__copyright'>
                        <span>© 2021 Pizza Sarody</span>
                    </div>
                </div>
                <div className='footer_section'>
                    <div className='footer__button'>
                        <a href='https://github.com/nikolaysarody/pizza-sarody'
                           target='_blank'>github.com/nikolaysarody/pizza-sarody</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
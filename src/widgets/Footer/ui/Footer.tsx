import React from 'react';
import './Footer.scss';

export const Footer = () => {
    if (window.innerWidth < 962) {
        return (
            <div className="footer">
                <div className="footer__container">
                    <div className="footer__section">
                        <div className="footer__button">
                            <a href="/src/pages">Пицца</a>
                        </div>
                    </div>
                    <div className="footer__section">
                        <div className="footer__button">
                            <a href="/about">О нас</a>
                        </div>
                        <div className="footer__button">
                            <a href="/checkout">Корзина</a>
                        </div>
                    </div>
                    <div className="footer__section">
                        <div className="footer__button">
                            <a href="https://github.com/nikolaysarody/pizza-sarody" target="_blank" rel="noreferrer">
                                github.com/nikolaysarody/
                                <br />
                                pizza-sarody
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <div className="footer__button">
                        <a href="/src/pages">Пицца</a>
                    </div>
                </div>
                <div className="footer__section">
                    <div className="footer__button">
                        <a href="/about">О нас</a>
                    </div>
                </div>
                <div className="footer__section">
                    <div className="footer__button">
                        <a href="/checkout">Корзина</a>
                    </div>
                </div>
                <div className="footer__section">
                    <div className="footer__button">
                        <a href="https://github.com/nikolaysarody/pizza-sarody" target="_blank" rel="noreferrer">
                            github.com/nikolaysarody/pizza-sarody
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

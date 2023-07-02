import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <Link
                        className="footer__button"
                        to="/"
                    >
                        Пицца
                    </Link>
                </div>
                <div className="footer__section">
                    <Link
                        className="footer__button"
                        to="/about"
                    >
                        О нас
                    </Link>
                </div>
                <div className="footer__section">
                    <Link
                        className="footer__button"
                        to="/checkout"
                    >
                        Корзина
                    </Link>
                </div>
                <div className="footer__section">
                    <Link
                        className="footer__button"
                        to="https://github.com/nikolaysarody/pizza-sarody"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/nikolaysarody/pizza-sarody
                    </Link>
                </div>
            </div>
        </footer>
    );
};

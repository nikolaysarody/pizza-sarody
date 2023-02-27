import React from 'react';
import './footer.scss';

const Footer: React.FC = () => {
    // const [container, setContainer] = useState(null);

    // useEffect(() => {
    //     checkSize();
    //     window.addEventListener('resize', checkSize);
    //     return () => window.removeEventListener('resize', checkSize);
    // }, []);

    // const checkSize = () => {
    //     if (window.innerWidth < 962) {
    //         setContainer(() => (
    //             <div className='footer__container'>
    //                 <div className='footer__section'>
    //                     <div className='footer__button'>
    //                         <a href='#'>Пицца</a>
    //                     </div>
    //                     <div className='footer__button'>
    //                         <a href='#'>Акции</a>
    //                     </div>
    //                 </div>
    //                 <div className='footer__section'>
    //                     <div className='footer__button'>
    //                         <a href='#'>О нас</a>
    //                     </div>
    //                     <div className='footer__button'>
    //                         <a href='#'>Корзина</a>
    //                     </div>
    //                 </div>
    //                 <div className='footer__section'>
    //                     <div className='footer__button'>
    //                         <a href='https://github.com/nikolaysarody/pizza-sarody'
    //                            target='_blank'>github.com/nikolaysarody/<br/>pizza-sarody</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         ));
    //     } else {
    //         setContainer(() => (
    //             <div className='footer__container'>
    //                 <div className='footer__section'>
    //                     <div className='footer__button'>
    //                         <a href='#'>Пицца</a>
    //                     </div>
    //                 </div>
    //                 <div className='footer__section'>
    //                     <div className='footer__button'>
    //                         <a href='#'>Акции</a>
    //                     </div>
    //                 </div>
    //                 <div className='footer__section'>
    //                     <div className='footer__button'>
    //                         <a href='#'>О нас</a>
    //                     </div>
    //                 </div>
    //                 <div className='footer__section'>
    //                     <div className='footer__button'>
    //                         <a href='#'>Корзина</a>
    //                     </div>
    //                 </div>
    //                 {/*<div className='footer__section'>*/}
    //                 {/*    <div className='footer__copyright'>*/}
    //                 {/*        <span>© {new Date().getFullYear()} Pizza Sarody</span>*/}
    //                 {/*    </div>*/}
    //                 {/*</div>*/}
    //                 <div className='footer__section'>
    //                     <div className='footer__button'>
    //                         <a href='https://github.com/nikolaysarody/pizza-sarody'
    //                            target='_blank'>github.com/nikolaysarody/pizza-sarody</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         ));
    //     }
    // }

    if (window.innerWidth < 962) {
        return (
            <div className='footer'>
                <div className='footer__container'>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <button>Пицца</button>
                        </div>
                        <div className='footer__button'>
                            <button>Акции</button>
                        </div>
                    </div>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <button>О нас</button>
                        </div>
                        <div className='footer__button'>
                            <button>Корзина</button>
                        </div>
                    </div>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <a href='https://github.com/nikolaysarody/pizza-sarody'
                               target='_blank'
                               rel='noreferrer'>github.com/nikolaysarody/<br/>pizza-sarody</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='footer'>
                <div className='footer__container'>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <button>Пицца</button>
                        </div>
                    </div>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <button>Акции</button>
                        </div>
                    </div>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <button>О нас</button>
                        </div>
                    </div>
                    <div className='footer__section'>
                        <div className='footer__button'>
                            <button>Корзина</button>
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
                               target='_blank'
                               rel='noreferrer'>github.com/nikolaysarody/pizza-sarody</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
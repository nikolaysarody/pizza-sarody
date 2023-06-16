import React from 'react';
import './About.scss';
import SendMail from '../../shared/ui/SendMail/SendMail';

function About() {
    return (
        <div className="about-page">
            <h3 className="about-page__header">Данный проект не является настоящей доставкой пиццы</h3>
            <span className="about-page__content">
                Он необходим для изучения технологий и демонстрации умения пользоваться ими. Если вы заинтересованы в
                сотрудничестве, пишите на&nbsp;
                <SendMail label="sarody@ya.ru" mailto="mailto:sarody@ya.ru" />
            </span>
        </div>
    );
}

export default About;

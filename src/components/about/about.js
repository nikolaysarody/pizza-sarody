import React from "react";
import './about.scss'
import MailTo from "../buttons/mailTo/mailTo";

function About() {
    return (
        <div className='about'>
            <h3>Данный проект не является настоящей доставкой пиццы</h3>
            <span>Он необходим для изучения технологий и демонстрации умения пользоваться ими. Если вы заинтересованы в сотрудничестве, пишите на
                <MailTo label={' sarody@ya.ru'}
                        mailto={'mailto:sarody@ya.ru'}/>
            </span>
        </div>
    );
}

export default About;
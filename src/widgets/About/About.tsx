import SendMail from '../../features/SendMail/SendMail';
import './About.scss';

const About = () => {
    return (
        <section className="about">
            <h3>Данный проект не является настоящей доставкой пиццы</h3>
            <span>
                Он необходим для изучения технологий и демонстрации умения пользоваться ими. Если вы заинтересованы в
                сотрудничестве, пишите на
                <SendMail label=" sarody@ya.ru" mailto="mailto:sarody@ya.ru" />
            </span>
        </section>
    );
};

export default About;

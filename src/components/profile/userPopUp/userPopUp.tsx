import React, {useState} from 'react';
import './userPopUp.scss';
import userImg from "../../header/user.svg";

const UserPopUp: React.FC = () => {
    const [popUpSwitch, setPopUpSwitch] = useState(false);

    const popUp = () => {
        if (popUpSwitch) {
            return (
                <div className='popup__container'>
                    <div className='popup__section'>
                        <input className='popup__login' placeholder='Логин'/>
                    </div>
                    <div className='popup__section'>
                        <input className='popup__login' placeholder='Пароль'/>
                    </div>
                    <div className='popup__section'>
                        <input className='popup__btn-login' type='button' value='Войти'/>
                        <input className='popup__btn-register' type='button' value='Регистрация'/>
                    </div>
                </div>
            );
        }
        return ('');
    }

    return (
        <div className='popup'>
            <img className='popup__img'
                 src={userImg}
                 alt='user'
                 width='22'
                 height='22'
                 onClick={() => setPopUpSwitch(prev => !prev)}
            />
            {popUp()}
        </div>
    )
}

export default UserPopUp;
import React, {useEffect, useState} from 'react';
import './userPopUp.scss';
import userImg from '../../header/user.svg';
import {login, registration} from '../../../store/actions/authAction';
import {useAppDispatch, useAppSelector} from '../../../hook';

const UserPopUp: React.FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.auth.user);
    const [popUpSwitch, setPopUpSwitch] = useState<boolean>(false);
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    useEffect(() => {
        console.log(user);
    }, [user])

    const popUp = () => {
        if (popUpSwitch) {
            return (
                <div className="popup__container">
                    <div className="popup__section">
                        <input className="popup__login"
                               placeholder="Логин"
                               onChange={(e) => {
                                   setUserEmail(e.target.value);
                               }}/>
                    </div>
                    <div className="popup__section">
                        <input className="popup__login"
                               placeholder="Пароль"
                               onChange={(e) => {
                                   setUserPassword(e.target.value);
                               }}/>
                    </div>
                    <div className="popup__section">
                        <input className="popup__btn-login"
                               type="button"
                               value="Войти"
                               onClick={() => {
                                   dispatch(login(userEmail, userPassword));
                               }}/>
                        <input className="popup__btn-register"
                               type="button"
                               value="Регистрация"
                               onClick={() => {
                                   dispatch(registration(userEmail, userPassword));
                               }}/>
                    </div>
                </div>
            );
        }
        return null;
    }

    return (
        <div className="popup">
            <div className="popup__wrapper"
                 onClick={() => setPopUpSwitch(prev => !prev)}>
                <img className="popup__img"
                     src={userImg}
                     alt="user"
                     width="22"
                     height="22"
                />
                <span className="popup__user-login">{user.login}</span>
            </div>
            {popUp()}
        </div>
    )
}

export default UserPopUp;
import React, {useEffect, useState} from 'react';
import {login, registration} from '../../../../store/actions/authActions';
import {useAppDispatch, useAppSelector} from '../../../../hook';
import '../userPopUp.scss';

const UserAuth: React.FC = () => {
    const dispatch = useAppDispatch();
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const apiError = useAppSelector(state => state.auth.error);

    const error = () => {
        return (
            <span className="popup__error">{apiError}</span>
        )
    }

    return (
        <form className="popup__container"
              onSubmit={(e) => {
                  e.preventDefault();
              }}>
            <div className="popup__section">
                <input className="popup__section-login"
                       placeholder="Логин"
                       onChange={(e) => {
                           setUserEmail(e.target.value);
                       }}/>
            </div>
            <div className="popup__section">
                <input className="popup__section-login"
                       placeholder="Пароль"
                       onChange={(e) => {
                           setUserPassword(e.target.value);
                       }}/>
            </div>
            {apiError ? error() : null}
            <div className="popup__section">
                <input className="popup__btn-login"
                       type="submit"
                       value="Войти"
                       onClick={() => {
                           dispatch(login(userEmail, userPassword));
                       }}
                />
                <input className="popup__btn-register"
                       type="button"
                       value="Регистрация"
                       onClick={() => {
                           dispatch(registration(userEmail, userPassword));
                       }}/>
            </div>
        </form>
    )
}

export default UserAuth;
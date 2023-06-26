import { memo, useState } from 'react';
import { login, registration } from '../../model/action/authActions';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/hooks/hooks';
import '../UserPopUp/UserPopUp.scss';

const UserAuth = memo(() => {
    const dispatch = useAppDispatch();
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const apiError = useAppSelector((state) => state.auth.error);

    return (
        <form
            className="popup__container"
            autoComplete="on"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <div className="popup__section">
                <input
                    className="popup__section-login"
                    id="email"
                    type="email"
                    placeholder="Логин"
                    onChange={(e) => {
                        setUserEmail(e.target.value);
                    }}
                />
            </div>
            <div className="popup__section">
                <input
                    className="popup__section-login"
                    type="password"
                    placeholder="Пароль"
                    onChange={(e) => {
                        setUserPassword(e.target.value);
                    }}
                />
            </div>
            {apiError && <span className="popup__error">{apiError}</span>}
            <div className="popup__section">
                <input
                    className="popup__btn-login"
                    type="submit"
                    value="Войти"
                    onClick={() => {
                        dispatch(login(userEmail, userPassword));
                    }}
                />
                <input
                    className="popup__btn-register"
                    type="button"
                    value="Регистрация"
                    onClick={() => {
                        dispatch(registration(userEmail, userPassword));
                    }}
                />
            </div>
        </form>
    );
});

export default UserAuth;

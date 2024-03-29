import { useForm } from 'react-hook-form';
import ProfileNav from '../ProfileNav/ProfileNav';
import { type IUser, Pages } from './model/types/user';
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks/hooks';
import { changeEmail, changeUsername } from './model/action/userActions';
import './Settings.scss';

const Settings = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.item);
    const userError = useAppSelector((state) => state.user.error);
    const userLoad = useAppSelector((state) => state.user.load);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>({
        mode: 'onBlur',
    });
    const onSubmit = handleSubmit((data) => {
        if (data.username) {
            dispatch(changeUsername(data.username));
        }
        if (data.email) {
            dispatch(changeEmail(data.email));
        }
    });

    return (
        <div className="settings">
            <ProfileNav page={Pages.Settings} />
            <div className="settings__container-form">
                <h1>Личные данные</h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor="username">
                        Имя
                        <input id="username" placeholder={user.username} {...register('username')} />
                    </label>
                    {errors?.username != null && (
                        <p className="settings__container-form-error">{errors.username.message}</p>
                    )}
                    {userError.username && <p className="settings__container-form-error">{userError.username}</p>}
                    <label htmlFor="email">
                        Почта
                        <input id="email" type="email" placeholder={user.email} {...register('email')} />
                    </label>
                    {errors?.email != null && (
                        <p className="settings__container-form-error">{errors.email.message}</p>
                    )}
                    {userError.email && <p className="settings__container-form-error">{userError.email}</p>}
                    {userLoad && <p className="settings__container-form-error">Успешно</p>}
                    <input type="submit" value="Сохранить" />
                </form>
            </div>
        </div>
    );
};

export default Settings;

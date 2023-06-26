import { Link } from 'react-router-dom';
import { logout } from '../../../../store/actions/authActions';
import { useAppDispatch } from '../../../../shared/lib/hooks/hooks';

interface UserMenuProps {
    popUpSwitch: () => void;
}

const UserMenu = ({ popUpSwitch }: UserMenuProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className="popup__container">
            <div className="popup__section">
                <div className="popup__section-title">
                    <Link
                        to="/settings"
                        onClick={() => {
                            popUpSwitch();
                        }}
                    >
                        Настройки
                    </Link>
                </div>
            </div>
            <div className="popup__section">
                <div className="popup__section-title">
                    <Link
                        to="/orders"
                        onClick={() => {
                            popUpSwitch();
                        }}
                    >
                        Заказы
                    </Link>
                </div>
            </div>
            <div className="popup__section">
                <div className="popup__section-title">
                    <Link
                        to="/addresses"
                        onClick={() => {
                            popUpSwitch();
                        }}
                    >
                        Адреса доставки
                    </Link>
                </div>
            </div>
            <div className="popup__section">
                <input
                    className="popup__btn-login"
                    type="button"
                    value="Выйти"
                    onClick={() => {
                        dispatch(logout());
                        popUpSwitch();
                    }}
                />
            </div>
        </div>
    );
};

export default UserMenu;

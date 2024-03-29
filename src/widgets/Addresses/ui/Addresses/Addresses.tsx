import { memo, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import ProfileNav from '../../../../features/ProfileNav/ProfileNav';
import { Pages } from '../../../../features/Settings/model/types/user';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/hooks/hooks';
import { addAddress, fetchAddresses } from '../../model/action/addressAction';
import { type IAddress } from '../../model/types/address';
import AddressItem from '../AddressItem/AddressItem';
import './Addresses.scss';

export const Addresses = memo(() => {
    const dispatch = useAppDispatch();
    const addresses = useAppSelector((state) => state.address.items);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IAddress>({
        mode: 'onBlur',
    });
    const onSubmit = handleSubmit((data) => {
        dispatch(addAddress(data));
        reset();
    });

    const addressesBody = useMemo(() => (
        addresses.length !== 0
            ? addresses.map((item) => (
                <AddressItem {...item} key={`${item.street}${item.apartment}${item.floor}`} />
            )) : 'Нет адресов'), [addresses]);

    useEffect(() => {
        dispatch(fetchAddresses());
    }, [dispatch]);

    return (
        <div className="addresses">
            <ProfileNav page={Pages.Addresses} />
            <div className="addresses__wrapper">
                <h1>Адреса доставки</h1>
                <div className="addresses__wrapper-row">
                    <div className="addresses__container-form">
                        <form onSubmit={onSubmit}>
                            <label htmlFor="street">
                                Улица
                                <input
                                    id="street"
                                    type="text"
                                    placeholder="Пушкина"
                                    {...register('street', {
                                        required: 'Поле обязательно к заполнению',
                                    })}
                                />
                            </label>
                            {errors?.street != null && (
                                <p className="addresses__container-form-error">{errors.street.message}</p>
                            )}
                            <label htmlFor="house">
                                Дом
                                <input
                                    id="house"
                                    type="text"
                                    placeholder="12"
                                    {...register('house', {
                                        required: 'Поле обязательно к заполнению',
                                    })}
                                />
                            </label>
                            {errors?.house != null && (
                                <p className="addresses__container-form-error">{errors.house.message}</p>
                            )}
                            <label htmlFor="entrance">
                                Подъезд
                                <input
                                    id="entrance"
                                    type="number"
                                    placeholder="1"
                                    {...register('entrance', {
                                        required: 'Поле должно содержать только цифры',
                                        maxLength: {
                                            value: 2,
                                            message: 'Максимум 2 символа',
                                        },
                                        valueAsNumber: true,
                                    })}
                                />
                            </label>
                            {errors?.entrance != null && (
                                <p className="addresses__container-form-error">{errors.entrance.message}</p>
                            )}
                            <label htmlFor="apartment">
                                Квартира
                                <input
                                    id="apartment"
                                    type="number"
                                    placeholder="23"
                                    {...register('apartment', {
                                        required: 'Поле должно содержать только цифры',
                                        maxLength: {
                                            value: 4,
                                            message: 'Максимум 4 символа',
                                        },
                                        valueAsNumber: true,
                                    })}
                                />
                            </label>
                            {errors?.apartment != null && (
                                <p className="addresses__container-form-error">{errors.apartment.message}</p>
                            )}
                            <label htmlFor="floor">
                                Этаж
                                <input
                                    id="floor"
                                    type="number"
                                    placeholder="5"
                                    {...register('floor', {
                                        required: 'Поле должно содержать только цифры',
                                        maxLength: {
                                            value: 3,
                                            message: 'Максимум 3 символа',
                                        },
                                        valueAsNumber: true,
                                    })}
                                />
                            </label>
                            {errors?.floor != null && (
                                <p className="addresses__container-form-error">{errors.floor.message}</p>
                            )}
                            <input type="submit" value="Добавить" />
                        </form>
                    </div>
                    <div className="addresses__container">
                        <h3>Адрес по умолчанию:</h3>
                        <ul className="addresses__items">
                            {addressesBody}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
});

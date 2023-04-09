import React, {useEffect} from 'react';
import ProfileNav from '../profileNav/profileNav';
import './addresses.scss';
import AddressItem from './addressItem/addressItem';
import {Pages} from '../../../models/user/models';
import {useAppDispatch, useAppSelector} from '../../../hook';
import {addAddress, fetchAddresses} from '../../../store/actions/addressAction';
import {useForm} from 'react-hook-form';
import {IAddress} from '../../../models/address/models';

const Addresses: React.FC = () => {
    const dispatch = useAppDispatch();
    const addresses = useAppSelector(state => state.address.items);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<IAddress>({
        mode: 'onBlur'
    });
    const onSubmit = handleSubmit(data => {
        dispatch(addAddress(data));
        reset();
    });

    useEffect(() => {
        dispatch(fetchAddresses());
    }, []);

    return (
        <div className="addresses">
            <ProfileNav page={Pages.Addresses}/>
            <div className="addresses__wrapper">
                <h1>Адреса доставки</h1>
                <div className="addresses__wrapper-row">
                    <div className="addresses__container-form">
                        <form onSubmit={onSubmit}>
                            <label>
                                Улица
                                <input {...register('street', {
                                    required: 'Поле обязательно к заполнению'
                                })}/>
                            </label>
                            {errors?.street ? <p className="addresses__error">{errors.street.message}</p> : null}
                            <label>
                                Дом
                                <input {...register('house', {
                                    required: 'Поле обязательно к заполнению'
                                })}/>
                            </label>
                            {errors?.house ? <p className="addresses__error">{errors.house.message}</p> : null}
                            <label>
                                Подъезд
                                <input type="number" {...register('entrance', {
                                    required: 'Поле должно содержать только цифры',
                                    maxLength: {
                                        value: 2,
                                        message: 'Максимум 2 символа'
                                    },
                                    valueAsNumber: true
                                })}/>
                            </label>
                            {errors?.entrance ? <p className="addresses__error">{errors.entrance.message}</p> : null}
                            <label>
                                Квартира
                                <input type="number"
                                       {...register('apartment', {
                                           required: 'Поле должно содержать только цифры',
                                           maxLength: {
                                               value: 4,
                                               message: 'Максимум 4 символа'
                                           },
                                           valueAsNumber: true
                                       })}/>
                            </label>
                            {errors?.apartment ? <p className="addresses__error">{errors.apartment.message}</p> : null}
                            <label>
                                Этаж
                                <input type="number"
                                       {...register('floor', {
                                           required: 'Поле должно содержать только цифры',
                                           maxLength: {
                                               value: 3,
                                               message: 'Максимум 3 символа'
                                           },
                                           valueAsNumber: true
                                       })}/>
                            </label>
                            {errors?.floor ? <p className="addresses__error">{errors.floor.message}</p> : null}
                            <input type="submit" value="Добавить"/>
                        </form>
                    </div>
                    <div className="addresses__container">
                        <h3>Адрес по умолчанию:</h3>
                        <ul className="addresses__items">
                            {addresses.length !== 0 ? addresses.map((item) =>
                                <AddressItem {...item} key={item._id}/>) : 'Нет адресов'}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addresses;
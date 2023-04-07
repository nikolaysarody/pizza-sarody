import React from 'react';
// import {useAppDispatch} from '../../../hook';
import {IAddress, Pages} from '../../../models/models';
import ProfileNav from '../profileNav/profileNav';
import './addresses.scss';
import OrderItem from '../orders/orderItem/orderItem';
import AddressItem from './addressItem/addressItem';

const Addresses: React.FC = () => {

    const addresses: IAddress[] = [
        {
            id: 'sdqwds',
            street: 'Пушкина',
            house: '26а',
            entrance: 8,
            apartment: 59,
            floor: 7,
            byDefault: false
        },
        {
            id: 'grege',
            street: 'Колотушкина',
            house: '84',
            entrance: 1,
            apartment: 12,
            floor: 3,
            byDefault: true
        }
    ];

    return (
        <div className="addresses">
            <ProfileNav page={Pages.Addresses}/>
            <div className="addresses__wrapper">
                <h1>Адреса доставки</h1>
                <div className="addresses__wrapper-row">
                    <div className="addresses__container-form">
                        <form>
                            <label>
                                Улица
                                <input type="text"/>
                            </label>
                            <label>
                                Дом
                                <input type="text"/>
                            </label>
                            <label>
                                Подъезд
                                <input type="text"/>
                            </label>
                            <label>
                                Квартира
                                <input type="text"/>
                            </label>
                            <label>
                                Этаж
                                <input type="text"/>
                            </label>
                            <input type="submit" value="Добавить"/>
                        </form>
                    </div>
                    <div className="addresses__container">
                        <h3>Адрес по умолчанию:</h3>
                        <ul className="addresses__items">
                            {addresses.map((item) => <AddressItem {...item} key={item.id}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addresses;
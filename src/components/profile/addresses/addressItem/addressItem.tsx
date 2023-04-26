import React from 'react';
import selector from '../../../../icons/selector.png';
import pushedSelector from '../../../../icons/pushed_selector.png';
import './addressesItem.scss';
import { type IAddress } from '../../../../models/address/models';
import trash from '../../../../icons/trash.svg';
import { useAppDispatch } from '../../../../hook';
import { deleteAddress, setDefaultAddress } from '../../../../store/actions/addressAction';

function AddressItem({ _id, street, byDefault, floor, house, entrance, apartment }: IAddress): JSX.Element {
    const dispatch = useAppDispatch();

    return (
        <li className="addresses__item-container">
            {byDefault ? (
                <img className="addresses__selector" src={pushedSelector} alt="*" />
            ) : (
                <button
                    type="button"
                    className="addresses__selector"
                    onClick={() => {
                        if (_id) {
                            dispatch(setDefaultAddress(_id));
                        }
                    }}
                >
                    <img src={selector} alt="*" />
                </button>
            )}
            <span>
                ул. {street} | д. {house} | под. {entrance} | кв. {apartment} | эт. {floor}
            </span>
            <button
                type="button"
                className="addresses__trash"
                onClick={() => {
                    if (_id) {
                        dispatch(deleteAddress(_id));
                    }
                }}
            >
                <img src={trash} alt="Delete" />
            </button>
        </li>
    );
}

export default AddressItem;

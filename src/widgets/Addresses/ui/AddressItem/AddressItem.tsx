import { memo } from 'react';
import selector from '../../../../shared/assets/icons/selector.png';
import pushedSelector from '../../../../shared/assets/icons/pushed_selector.png';
import { type IAddress } from '../../model/types/address';
import trash from '../../../../shared/assets/icons/trash.svg';
import { useAppDispatch } from '../../../../shared/lib/hooks/hooks';
import { deleteAddress, setDefaultAddress } from '../../model/action/addressAction';
import './AddressesItem.scss';

const AddressItem = memo((props: IAddress) => {
    const {
        _id,
        street,
        byDefault,
        floor,
        house,
        entrance,
        apartment,
    } = props;
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
                ул.
                {' '}
                {street}
                {' '}
                | д.
                {' '}
                {house}
                {' '}
                | под.
                {' '}
                {entrance}
                {' '}
                | кв.
                {' '}
                {apartment}
                {' '}
                | эт.
                {' '}
                {floor}
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
});

export default AddressItem;

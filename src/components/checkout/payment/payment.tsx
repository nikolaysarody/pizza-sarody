import React from 'react';
import pushedSelector from '../../../icons/pushed_selector.png';
import selector from '../../../icons/selector.png';
import { type OrderPaymentOption } from '../../../models/order/models';
import './payment.scss';

interface IPayment {
    selectedItem: boolean;
    paymentOption: OrderPaymentOption;
    changeOption: () => void;
}

function PaymentOption({ selectedItem, paymentOption, changeOption }: IPayment): JSX.Element {
    return (
        <button type="button" className="payment" onClick={changeOption}>
            {selectedItem ? <img src={pushedSelector} alt="*" /> : <img src={selector} alt="*" />}
            <span>{paymentOption}</span>
        </button>
    );
}

export default PaymentOption;

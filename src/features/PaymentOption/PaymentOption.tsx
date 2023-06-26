import { memo } from 'react';
import pushedSelector from '../../shared/assets/icons/pushed_selector.png';
import selector from '../../shared/assets/icons/selector.png';
import { type OrderPaymentOption } from '../../entities/Orders/model/types/order';
import './PaymentOption.scss';

interface IPayment {
    selectedItem: boolean;
    paymentOption: OrderPaymentOption;
    changeOption: (option: OrderPaymentOption) => void;
}

const PaymentOption = memo((props: IPayment) => {
    const {
        selectedItem,
        paymentOption,
        changeOption,
    } = props;
    return (
        <button type="button" className="payment" onClick={() => changeOption(paymentOption)}>
            {selectedItem ? <img src={pushedSelector} alt="*" /> : <img src={selector} alt="*" />}
            <span>{paymentOption}</span>
        </button>
    );
});

export default PaymentOption;

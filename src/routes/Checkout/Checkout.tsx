import React, { FC, useContext } from 'react';
import styles from './Checkout.module.scss';

import {
    CartContext,
    CartItemInterface,
} from '../../contexts/CartContext/CartContext';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = (props: CheckoutProps) => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className={styles.Checkout} data-testid="Checkout">
            {cartItems.map((item: CartItemInterface) => (
                <CheckoutItem key={item.id} cartItem={item} />
            ))}
            <div className={styles.CheckoutTotal}>
                <span>Total</span>
                <span>
                    <strong>{cartTotal}</strong>
                </span>
            </div>
        </div>
    );
};

export default Checkout;

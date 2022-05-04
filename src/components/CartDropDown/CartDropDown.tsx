import React, { FC } from 'react';
import Button from '../Button/Button';
import styles from './CartDropDown.module.scss';

interface CartDropDownProps {}

const CartDropDown: FC<CartDropDownProps> = (props: CartDropDownProps) => {
    return (
        <div className={styles.CartDropDown} data-testid="CartDropDown">
            CartDropDown Component
            <Button>Go to Checkout</Button>
        </div>
    );
};

export default CartDropDown;

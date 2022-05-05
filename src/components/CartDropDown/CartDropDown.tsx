import React, { FC, useContext } from 'react';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import styles from './CartDropDown.module.scss';

import { CartContext } from '../../contexts/CartContext/CartContext';
import { Link } from 'react-router-dom';

interface CartDropDownProps {}

const CartDropDown: FC<CartDropDownProps> = (props: CartDropDownProps) => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className={styles.CartDropDown} data-testid="CartDropDown">
            <div className={styles.CartItemsContainer}>
                {cartItems.map((item: any) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Link to={'/checkout'}>
                <Button>Go to Checkout</Button>
            </Link>
        </div>
    );
};

export default CartDropDown;

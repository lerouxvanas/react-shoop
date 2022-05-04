import React, { FC, useContext } from 'react';
import styles from './CartIcon.module.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/CartContext/CartContext';

interface CartIconProps {}

const CartIcon: FC<CartIconProps> = (props: CartIconProps) => {
    const { setIsCartOpen, isCartOpen } = useContext(CartContext);

    const handleToggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div
            className={styles.CartIcon}
            data-testid="CartIcon"
            onClick={handleToggleCart}>
            <ShoppingIcon />
            <span className={styles.CartCount}>0</span>
        </div>
    );
};

export default CartIcon;

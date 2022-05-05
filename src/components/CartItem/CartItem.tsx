import React, { FC } from 'react';
import styles from './CartItem.module.scss';
import { CartItemInterface } from '../../contexts/CartContext/CartContext';

interface CartItemProps {
    cartItem: CartItemInterface;
}

const CartItem: FC<CartItemProps> = ({ cartItem }: CartItemProps) => {
    const { id, name, price, imageUrl, quantity } = cartItem;
    return (
        <div className={styles.CartItem} data-testid="CartItem">
            <div>
                <img src={imageUrl} />
            </div>
            <div>{name}</div>
            <div>{quantity}</div>
            <div>
                <strong>{price * quantity}</strong>
            </div>
        </div>
    );
};

export default CartItem;

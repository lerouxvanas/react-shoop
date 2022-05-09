import React, { FC, useContext } from 'react';
import {
    CartItemInterface,
    CartContext,
} from '../../contexts/CartContext/CartContext';
import styles from './CheckoutItem.module.scss';

interface CheckoutItemProps {
    cartItem: CartItemInterface;
}

const Plus = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-plus"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#607D8B"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
        </svg>
    );
};

const Minus = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-minus"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#607D8B"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
    );
};

const CheckoutItem: FC<CheckoutItemProps> = ({
    cartItem,
}: CheckoutItemProps) => {
    const { incrementQuantity, decrementQuantity, removeItemFromCart } =
        useContext(CartContext);

    const onDecrement = () => {
        decrementQuantity(cartItem);
    };

    const onIncrement = () => {
        incrementQuantity(cartItem);
    };

    const onDelete = () => {
        removeItemFromCart(cartItem);
    };

    return (
        <div className={styles.CheckoutItem} data-testid="CheckoutItem">
            <div>
                <img src={cartItem.imageUrl} alt={cartItem.name} />
            </div>
            <div>{cartItem.name}</div>
            <div>
                <span onClick={onDecrement}>
                    <Minus />
                </span>
                <span>{cartItem.quantity}</span>
                <span onClick={onIncrement}>
                    <Plus />
                </span>
            </div>
            <div>{cartItem.price * cartItem.quantity}</div>
            <div>
                <span onClick={onDelete}>&#10005;</span>
            </div>
        </div>
    );
};

export default CheckoutItem;

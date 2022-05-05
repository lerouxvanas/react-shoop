/* eslint-disable */
import CartItem from './CartItem';

export default {
    title: 'CartItem',
};

export const Default = () => (
    <CartItem
        cartItem={{ id: 0, price: 0, name: '', imageUrl: '', quantity: 0 }}
    />
);

Default.story = {
    name: 'default',
};

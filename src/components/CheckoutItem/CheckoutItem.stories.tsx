/* eslint-disable */
import CheckoutItem from './CheckoutItem';

export default {
    title: 'CheckoutItem',
};

export const Default = () => (
    <CheckoutItem
        cartItem={{ id: 0, name: '', price: 0, imageUrl: '', quantity: 0 }}
    />
);

Default.story = {
    name: 'default',
};

/* eslint-disable */
import ProductCard from './ProductCard';

export default {
    title: 'ProductCard',
};

export const Default = () => (
    <ProductCard product={{ id: 0, name: '', price: 0, imageUrl: '' }} />
);

Default.story = {
    name: 'default',
};

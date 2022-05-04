import React, { FC, useContext } from 'react';
import {
    ProductsContextContext,
    ProductInterface,
} from '../../contexts/ProductsContext/ProductsContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Shop.module.scss';

interface ShopProps {}

const Shop: FC<ShopProps> = (props: ShopProps) => {
    const { products } = useContext(ProductsContextContext);
    return (
        <div className={styles.Shop} data-testid="Shop">
            {products.map((product: ProductInterface) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;

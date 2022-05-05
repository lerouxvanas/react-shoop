import React, { FC, useContext } from 'react';
import styles from './ProductCard.module.scss';
import { ProductInterface } from '../../contexts/ProductsContext/ProductsContext';
import Button from '../Button/Button';

import { CartContext } from '../../contexts/CartContext/CartContext';

interface ProductCardProps {
    product: ProductInterface;
}

const ProductCard: FC<ProductCardProps> = ({ product }: ProductCardProps) => {
    const { addItemToCart } = useContext(CartContext);

    const onAddToCart = () => {
        addItemToCart(product);
    };
    return (
        <div className={styles.ProductCard} data-testid="ProductCard">
            <img src={product.imageUrl} alt={product.name} />
            <div className={styles.ProductFooter}>
                <div>{product.name}</div>
                <div>{product.price}</div>
            </div>

            <Button btnType="inverted" onClick={onAddToCart}>
                Add to cart
            </Button>
        </div>
    );
};

export default ProductCard;

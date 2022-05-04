import React, { FC } from 'react';
import styles from './ProductCard.module.scss';
import { ProductInterface } from '../../contexts/ProductsContext/ProductsContext';
import Button from '../Button/Button';

interface ProductCardProps {
    product?: ProductInterface;
}

const ProductCard: FC<ProductCardProps> = ({ product }: ProductCardProps) => {
    return (
        <div className={styles.ProductCard} data-testid="ProductCard">
            <img src={product?.imageUrl} alt={product?.name} />
            <div className={styles.ProductFooter}>
                <div>{product?.name}</div>
                <div>{product?.price}</div>
            </div>

            <Button btnType="inverted">Add to cart</Button>
        </div>
    );
};

export default ProductCard;

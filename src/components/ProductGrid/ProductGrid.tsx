import React, { FC } from 'react';
import styles from './ProductGrid.module.scss';

interface ProductGridProps {
    children?: React.ReactNode;
}

const ProductGrid: FC<ProductGridProps> = ({ children }: ProductGridProps) => {
    return (
        <div className={styles.ProductGrid} data-testid="ProductGrid">
            {children}
        </div>
    );
};

export default ProductGrid;

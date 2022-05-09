import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ProductInterface } from '../../contexts/CategoriesContext/CategoriesContext';
import ProductCard from '../ProductCard/ProductCard';
import ProductGrid from '../ProductGrid/ProductGrid';
import styles from './CategoryPreview.module.scss';

interface CategoryPreviewProps {
    title: string;
    products: ProductInterface[];
}

const CategoryPreview: FC<CategoryPreviewProps> = ({
    title,
    products,
}: CategoryPreviewProps) => {
    return (
        <div className={styles.CategoryPreview} data-testid="CategoryPreview">
            <Link to={`${title}`}>
                <h2>{title}</h2>
            </Link>
            <ProductGrid>
                {products
                    ?.filter((_, index: number) => index < 3)
                    .map((product: ProductInterface) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </ProductGrid>
        </div>
    );
};

export default CategoryPreview;

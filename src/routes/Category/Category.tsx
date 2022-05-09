import React, { FC, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductGrid from '../../components/ProductGrid/ProductGrid';

import {
    CategoriesContextContext,
    ProductInterface,
} from '../../contexts/CategoriesContext/CategoriesContext';
import styles from './Category.module.scss';

interface CategoryProps {}

const Category: FC<CategoryProps> = (props: CategoryProps) => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContextContext);
    const [products, setProducts] = useState<ProductInterface[]>([]);

    useEffect(() => {
        category && setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <div className={styles.Category} data-testid="Category">
            <h1>{category}</h1>
            <ProductGrid>
                {products?.map((product: ProductInterface) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ProductGrid>
        </div>
    );
};

export default Category;

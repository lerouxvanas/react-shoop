import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';
import styles from './Shop.module.scss';

interface ShopProps {}

const Shop: FC<ShopProps> = (props: ShopProps) => {
    return (
        <div className={styles.Shop} data-testid="Shop">
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=":category" element={<Category />} />
            </Routes>
        </div>
    );
};

export default Shop;

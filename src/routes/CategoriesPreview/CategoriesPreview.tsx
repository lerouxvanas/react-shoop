import React, { FC, useContext } from 'react';
import { CategoriesContextContext } from '../../contexts/CategoriesContext/CategoriesContext';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import styles from './CategoriesPreview.module.scss';

interface CategoriesPreviewProps {}

const CategoriesPreview: FC<CategoriesPreviewProps> = (
    props: CategoriesPreviewProps
) => {
    const { categoriesMap } = useContext(CategoriesContextContext);
    return (
        <div
            className={styles.CategoriesPreview}
            data-testid="CategoriesPreview">
            {Object.keys(categoriesMap).map((title: string) => (
                <CategoryPreview
                    key={title}
                    title={title}
                    products={categoriesMap[title]}
                />
            ))}
        </div>
    );
};

export default CategoriesPreview;

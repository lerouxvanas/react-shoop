import React, { FC } from 'react';
import styles from './CategoryContainer.module.scss';

interface CategoryContainerProps {
    title: string;
    description: string;
    image?: string;
}

const CategoryContainer: FC<CategoryContainerProps> = (
    props: CategoryContainerProps
) => {
    const { title, description, image } = props;
    return (
        <div
            className={styles.CategoryContainer}
            data-testid="CategoryContainer"
            style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.CategoryInner}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CategoryContainer;

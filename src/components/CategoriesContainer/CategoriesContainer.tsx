import React, { FC } from 'react';
import styles from './CategoriesContainer.module.scss';
import CategoryContainer from '../CategoryContainer/CategoryContainer';

interface CategoryInterface {
    title: string;
    description: string;
    image: string;
    id: string;
}

interface CategoriesContainerProps {
    categories?: CategoryInterface[];
}

const CategoriesContainer: FC<CategoriesContainerProps> = (
    props: CategoriesContainerProps
) => {
    const { categories } = props;

    return (
        <div
            className={styles.CategoriesContainer}
            data-testid="CategoriesContainer">
            {categories?.map((category: CategoryInterface) => (
                <CategoryContainer
                    title={category.title}
                    description={category.description}
                    key={category.id}
                    image={category.image}
                />
            ))}
        </div>
    );
};

export default CategoriesContainer;

import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CategoryContainer.module.scss';

interface CategoryContainerProps {
    title: string;
    description: string;
    image?: string;
    route: string;
}

const CategoryContainer: FC<CategoryContainerProps> = (
    props: CategoryContainerProps
) => {
    const { title, description, image, route } = props;
    const navigate = useNavigate();

    const onNavigateHandler = () => {
        navigate(route);
    };
    return (
        <div
            className={styles.CategoryContainer}
            data-testid="CategoryContainer"
            onClick={onNavigateHandler}
            style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.CategoryInner}>
                <h2>{title}</h2>
                <hr />
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CategoryContainer;

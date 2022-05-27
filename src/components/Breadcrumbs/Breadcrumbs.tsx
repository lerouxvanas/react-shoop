import React, { FC } from 'react';
import styles from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {}

const Breadcrumbs: FC<BreadcrumbsProps> = (props: BreadcrumbsProps) => {
    return (
        <div className={styles.Breadcrumbs} data-testid="Breadcrumbs">
            Breadcrumbs Component
        </div>
    );
};

export default Breadcrumbs;

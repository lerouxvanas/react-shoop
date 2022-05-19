import React, { FC } from 'react';
import Ofo from '../../components/Ofo/Ofo';
import PostsList from '../../components/PostsList/PostsList';
import styles from './OfoPage.module.scss';

interface OfoPageProps {}

const OfoPage: FC<OfoPageProps> = (props: OfoPageProps) => {
    return (
        <div className={styles.OfoPage} data-testid="OfoPage">
            <Ofo />
            <PostsList />
        </div>
    );
};

export default OfoPage;

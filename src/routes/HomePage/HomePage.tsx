import React, { FC } from 'react';
import styles from './HomePage.module.scss';

import CategoriesContainer from '../../components/CategoriesContainer/CategoriesContainer';
const cloudUrl =
    'https://res.cloudinary.com/dm0mfpkhq/image/fetch/c_lfill,f_auto,w_800,q_auto:good/';
const categories = [
    {
        title: 'Hats',
        description: 'Shop Now',
        id: 'hats',
        image: `https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
        route: 'shop/hats',
    },
    {
        title: 'Jackets',
        description: 'Shop Now',
        id: 'jackets',
        image: `${cloudUrl}https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`,
        route: 'shop/jackets',
    },
    {
        title: 'Sneakers',
        description: 'Shop Now',
        id: 'sneakers',
        image: `${cloudUrl}https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`,
        route: 'shop/sneakers',
    },
    {
        title: 'Womens',
        description: 'Shop Now',
        id: 'womens',
        image: `${cloudUrl}https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`,
        route: 'shop/womens',
    },
    {
        title: 'Mens',
        description: 'Shop Now',
        id: 'mens',
        image: `https://images.unsplash.com/photo-1572897938832-fcce7f53ccaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
        route: 'shop/mens',
    },
];

interface HomePageProps {}

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {
    return (
        <div className={styles.HomePage} data-testid="HomePage">
            <CategoriesContainer categories={categories} />
        </div>
    );
};

export default HomePage;

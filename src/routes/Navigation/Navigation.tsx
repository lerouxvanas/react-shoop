import React, { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { ReactComponent as FitLogo } from '../../assets/logo.svg';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = (props: NavigationProps) => {
    return (
        <React.Fragment>
            <div className={styles.Navigation} data-testid="Navigation">
                <div>
                    <Link className={styles.NavLink} to="/">
                        <FitLogo className={styles.Logo} />
                    </Link>
                </div>
                <div className={styles.LinkContainer}>
                    <Link className={styles.NavLink} to="/shop">
                        Shop
                    </Link>
                    <Link className={styles.NavLink} to="/sign-in">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </React.Fragment>
    );
};

export default Navigation;

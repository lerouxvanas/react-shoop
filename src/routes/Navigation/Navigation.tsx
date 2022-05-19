import React, { FC, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { ReactComponent as FitLogo } from '../../assets/logo.svg';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropDown from '../../components/CartDropDown/CartDropDown';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = (props: NavigationProps) => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const handleSignOut = async () => {
        await signOutUser();
    };
    return (
        <React.Fragment>
            <div className={styles.Navigation} data-testid="Navigation">
                <div>
                    <Link className={styles.NavLink} to="/">
                        <FitLogo className={styles.Logo} />
                    </Link>
                </div>
                <div className={styles.LinkContainer}>
                    {currentUser && (
                        <Link className={styles.NavLink} to="/shop">
                            {currentUser?.displayName}
                        </Link>
                    )}

                    <Link className={styles.NavLink} to="/shop">
                        Shop
                    </Link>

                    <Link className={styles.NavLink} to="/ofo">
                        OFO
                    </Link>

                    {currentUser === null ? (
                        <Link className={styles.NavLink} to="/auth">
                            Sign In
                        </Link>
                    ) : (
                        <Link
                            className={styles.NavLink}
                            to="/auth"
                            onClick={handleSignOut}>
                            Sign Out
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </React.Fragment>
    );
};

export default Navigation;

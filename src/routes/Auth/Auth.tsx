import React, { FC } from 'react';
import styles from './Auth.module.scss';

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

interface AuthProps {}

const Auth: FC<AuthProps> = (props: AuthProps) => {
    return (
        <div className={styles.Auth} data-testid="Auth">
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Auth;

import React, { FC } from 'react';
import styles from './SignIn.module.scss';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

interface SignInProps {}

const SignIn: FC<SignInProps> = (props: SignInProps) => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div className={styles.SignIn} data-testid="SignIn">
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    );
};

export default SignIn;

import React, { FC } from 'react';
import styles from './SignIn.module.scss';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Button from '../../components/Button/Button';

interface SignInProps {}

const SignIn: FC<SignInProps> = (props: SignInProps) => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div className={styles.SignIn} data-testid="SignIn">
            <Button
                btnType="secondary"
                onClick={logGoogleUser}
                label="Sign In with Google"
            />
            <SignUpForm />
        </div>
    );
};

export default SignIn;

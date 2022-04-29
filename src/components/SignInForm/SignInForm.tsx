import React, { FC, useState } from 'react';
import FormInput from '../FormInput/FormInput';
import styles from './SignInForm.module.scss';
import {
    signInEmailAndPassword,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../Button/Button';

interface SignInFormProps {}

interface defaultFormFieldsInterface {
    email: string;
    password: string;
}

const defaultFormFields: defaultFormFieldsInterface = {
    email: '',
    password: '',
};

const SignInForm: FC<SignInFormProps> = (props: SignInFormProps) => {
    const [formFields, setFormFields] =
        useState<defaultFormFieldsInterface>(defaultFormFields);
    const { email, password } = formFields;

    const logInGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const onHandleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        try {
            const { user } = await signInEmailAndPassword(email, password);

            resetFormFields();
        } catch (err: any) {
            if (err?.code === 'auth/user-not-found') {
                alert('This user does not exist');
            }
            if (err?.code === 'auth/wrong-password') {
                alert('Incorrect password');
            }
            console.log('err', err);
        }
    };

    const onHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;

        setFormFields((prev: defaultFormFieldsInterface) => {
            return {
                ...prev,
                [`${name}`]: value,
            };
        });
    };

    return (
        <div className={styles.SignInForm} data-testid="SignInForm">
            <h1>Sign in with your email and password</h1>
            <form onSubmit={onHandleSubmit}>
                <FormInput
                    label="Email"
                    onChange={onHandleChange}
                    name="email"
                    type="email"
                    required
                    value={email}
                />
                <FormInput
                    label="Password"
                    onChange={onHandleChange}
                    name="password"
                    type="password"
                    required
                    value={password}
                />

                <div className={styles.ButtonWrapper}>
                    <Button type="submit">Sign In</Button>
                    <Button btnType="secondary" onClick={logInGoogleUser}>
                        Sign In with Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;

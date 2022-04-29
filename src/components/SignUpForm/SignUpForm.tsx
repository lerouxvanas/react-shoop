import React, { FC, useState } from 'react';
import styles from './SignUpForm.module.scss';
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

interface SignUpFormProps {}

interface defaultFormFieldsInterface {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const defaultFormFields: defaultFormFieldsInterface = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm: FC<SignUpFormProps> = (props: SignUpFormProps) => {
    const [formFields, setFormFields] =
        useState<defaultFormFieldsInterface>(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const onHandleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            const userDocRef = await createUserDocumentFromAuth(user, {
                displayName,
            });
            resetFormFields();
        } catch (err: any) {
            if (err?.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
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
        <div className={styles.SignUpForm} data-testid="SignUpForm">
            <h1>Sign up with your email and password</h1>
            <form onSubmit={onHandleSubmit}>
                <FormInput
                    label="Display Name"
                    onChange={onHandleChange}
                    name="displayName"
                    type="text"
                    required
                    value={displayName}
                />
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
                <FormInput
                    label="Confirm Password"
                    onChange={onHandleChange}
                    name="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                />

                <div className={styles.FormElement}>
                    <Button type="submit">Sign Up</Button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;

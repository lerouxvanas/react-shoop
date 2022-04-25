import React, { FC } from 'react';
import styles from './SignUpForm.module.scss';

interface SignUpFormProps {}

const SignUpForm: FC<SignUpFormProps> = (props: SignUpFormProps) => {
    return (
        <div className={styles.SignUpForm} data-testid="SignUpForm">
            SignUpForm Component
        </div>
    );
};

export default SignUpForm;

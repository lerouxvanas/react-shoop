import React, { FC } from 'react';
import styles from './FormInput.module.scss';

interface FormInputProps {
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    label?: string;
    value?: string;
    name?: string;
    type?: string;
    required?: boolean;
    error?: boolean;
}

const FormInput: FC<FormInputProps> = (props: FormInputProps) => {
    const { onChange, label, name, value, type, required, error } = props;
    return (
        <div
            className={`${styles.FormInput} ${error === true && styles.error}`}
            data-testid="FormInput">
            <label>{label || 'label'}</label>
            <input
                onChange={onChange}
                name={name || 'name'}
                type={type || 'text'}
                required={required || false}
                value={value}
            />
        </div>
    );
};

export default FormInput;

import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    type?: 'button' | 'submit';
    onClick?: () => void;
    children?: React.ReactNode;
    btnType?: 'primary' | 'secondary' | 'inverted';
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { children, type, onClick, btnType } = props;
    return (
        <div
            className={`${styles.ButtonWrapper} ${
                styles[btnType || 'primary']
            }`}
            data-testid="Button">
            <button type={type || 'button'} onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;

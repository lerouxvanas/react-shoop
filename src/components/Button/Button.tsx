import React, { FC } from 'react';
import styles from './Button.module.scss';

import * as Style from './Button.styled';

export enum BUTTON_STYLE_TYPE {
    primary = 'primary',
    secondary = 'secondary',
    inverted = 'inverted',
}

export enum BUTTON_TYPE {
    button = 'button',
    submit = 'submit',
    reset = 'reset',
}

export const BUTTON_TYPE_CLASSES = {
    primary: BUTTON_STYLE_TYPE.primary,
    secondary: BUTTON_STYLE_TYPE.secondary,
    inverted: BUTTON_STYLE_TYPE.inverted,
};

interface ButtonProps {
    type?: BUTTON_TYPE;
    onClick?: () => void;
    children?: React.ReactNode;
    btnType?: BUTTON_STYLE_TYPE;
}

const getStyledButton = (
    buttonType: BUTTON_STYLE_TYPE = BUTTON_TYPE_CLASSES.primary
) =>
    ({
        [BUTTON_TYPE_CLASSES.primary]: Style.PrimaryButton,
        [BUTTON_TYPE_CLASSES.secondary]: Style.SecondaryButton,
        [BUTTON_TYPE_CLASSES.inverted]: Style.InvertedButton,
    }[buttonType]);

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { children, type, onClick, btnType } = props;
    const StyledButton = getStyledButton(btnType);
    return (
        <StyledButton type={type || BUTTON_TYPE.button} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;

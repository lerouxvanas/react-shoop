import styled from 'styled-components';

export const BaseButton = styled.button`
    border: 1px solid #333;
    background: #333;
    color: #fff;
    padding: 10px 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;

    &:hover {
        color: #333;
        background-color: #fff;
    }
`;

export const PrimaryButton = styled(BaseButton)`
    border: 1px solid #333;
    background: #333;
    color: #fff;
    &:hover {
        color: #333;
        background-color: #fff;
    }
`;

export const SecondaryButton = styled(BaseButton)`
    border: 1px solid cornflowerblue;
    background: cornflowerblue;
    color: #fff;
    &:hover {
        color: cornflowerblue;
        background-color: #fff;
    }
`;

export const InvertedButton = styled(BaseButton)`
    border: 1px solid #ccc;
    background: #fff;
    color: #333;
    &:hover {
        color: #fff;
        background-color: #333;
    }
`;

/*
.ButtonWrapper {
    & > button {
        border: 1px solid #333;
        background: #333;
        color: #fff;
        padding: 10px 20px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        cursor: pointer;

        &:hover {
            color: #333;
            background-color: #fff;
        }
    }

    &.primary {
        & > button {
            border: 1px solid #333;
            background: #333;
            color: #fff;
            &:hover {
                color: #333;
                background-color: #fff;
            }
        }
    }

    &.secondary {
        & > button {
            border: 1px solid cornflowerblue;
            background: cornflowerblue;
            color: #fff;
            &:hover {
                color: cornflowerblue;
                background-color: #fff;
            }
        }
    }

    &.inverted {
        & > button {
            border: 1px solid #ccc;
            background: #fff;
            color: #333;
            &:hover {
                color: #fff;
                background-color: #333;
            }
        }
    }
}
*/

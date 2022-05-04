import React, { FC, createContext, useState } from 'react';

type CartContextState = {
    isCartOpen: Boolean;
    setIsCartOpen: React.SetStateAction<any>;
};
const CartContextDefaultValues: CartContextState = {
    isCartOpen: false,
    setIsCartOpen: () => null,
};

interface CartContextProps {
    children?: React.ReactNode;
}

export const CartContext = createContext<CartContextState>(
    CartContextDefaultValues
);

export const CartContextProvider: FC<CartContextProps> = ({
    children,
}: CartContextProps) => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const value = {
        isCartOpen,
        setIsCartOpen,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

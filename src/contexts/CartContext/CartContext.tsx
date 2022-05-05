import React, { FC, createContext, useState, useEffect } from 'react';
import { ProductInterface } from '../ProductsContext/ProductsContext';
export interface CartItemInterface {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
}

type CartContextState = {
    isCartOpen: Boolean;
    setIsCartOpen: React.SetStateAction<any>;
    cartItems: CartItemInterface[];
    addItemToCart: (item: ProductInterface) => void;
    cartCount: number;
    cartTotal: number;
    removeItemFromCart: (item: CartItemInterface) => void;
    incrementQuantity: (item: CartItemInterface) => void;
    decrementQuantity: (item: CartItemInterface) => void;
};

const CartContextDefaultValues: CartContextState = {
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    cartCount: 0,
    cartTotal: 0,
    removeItemFromCart: () => null,
    incrementQuantity: () => null,
    decrementQuantity: () => null,
};

interface CartContextProps {
    children?: React.ReactNode;
}

export const CartContext = createContext<CartContextState>(
    CartContextDefaultValues
);

const addCartItem = (
    cartItems: CartItemInterface[],
    productToAdd: ProductInterface
): CartItemInterface[] => {
    const existingCartItem = cartItems.find(
        (cartItem: CartItemInterface) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem: CartItemInterface) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementCartQuantity = (
    cartItems: CartItemInterface[],
    itemToUpdate: CartItemInterface
): CartItemInterface[] => {
    return cartItems
        .map((item: CartItemInterface) =>
            item.id === itemToUpdate.id && item.quantity > 1
                ? {
                      ...item,
                      quantity: item.quantity - 1,
                  }
                : item
        )
        .filter((item) => item);
};

const removeCartItemFromCart = (
    cartItems: CartItemInterface[],
    itemToRemove: CartItemInterface
): CartItemInterface[] => {
    return cartItems.filter(
        (item: CartItemInterface) => item.id !== itemToRemove.id
    );
};

export const CartContextProvider: FC<CartContextProps> = ({
    children,
}: CartContextProps) => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<CartItemInterface[]>([]);
    const [cartCount, setCartCount] = useState<number>(0);
    const [cartTotal, setCartTotal] = useState<number>(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total: number, cartItem: CartItemInterface) =>
                total + cartItem.quantity,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total: number, cartItem: CartItemInterface) =>
                total + cartItem.price * cartItem.quantity,
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (item: ProductInterface) => {
        setCartItems((prev: CartItemInterface[]) => addCartItem(prev, item));
    };

    const removeItemFromCart = (itemToRemove: CartItemInterface) => {
        setCartItems(removeCartItemFromCart(cartItems, itemToRemove));
    };

    const incrementQuantity = (itemToUpdate: CartItemInterface) => {
        addItemToCart(itemToUpdate);
    };

    const decrementQuantity = (itemToUpdate: CartItemInterface) => {
        setCartItems(decrementCartQuantity(cartItems, itemToUpdate));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        cartTotal,
        removeItemFromCart,
        incrementQuantity,
        decrementQuantity,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

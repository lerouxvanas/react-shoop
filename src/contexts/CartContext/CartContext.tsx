import React, { FC, createContext, useReducer } from 'react';
import { ProductInterface } from '../CategoriesContext/CategoriesContext';
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

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

export enum CartReducerActionTypes {
    SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
    SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
}
interface ReducerAction {
    type: CartReducerActionTypes;
    payload?: any;
}

interface ReducerState {
    isCartOpen: boolean;
    cartItems: CartItemInterface[];
    cartCount: number;
    cartTotal: number;
}

interface CartItemsPayloadInterface {
    cartItems: CartItemInterface[];
    cartCount: number;
    cartTotal: number;
}

const setCartItemsAction = (
    payload: CartItemsPayloadInterface
): ReducerAction => {
    return {
        type: CartReducerActionTypes.SET_CART_ITEMS,
        payload,
    };
};

const setIsCartOpenAction = (payload: boolean): ReducerAction => {
    return {
        type: CartReducerActionTypes.SET_IS_CART_OPEN,
        payload,
    };
};

const cartReducer = (
    state: ReducerState,
    action: ReducerAction
): ReducerState => {
    const { type, payload } = action;

    switch (type) {
        case CartReducerActionTypes.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        case CartReducerActionTypes.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};

export const CartContextProvider: FC<CartContextProps> = ({
    children,
}: CartContextProps) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { cartItems, cartCount, cartTotal, isCartOpen } = state;

    const setIsCartOpen = (setToOpen: boolean) => {
        dispatch(setIsCartOpenAction(setToOpen));
    };

    const updateCartItemsReducer = (newCartItems: CartItemInterface[]) => {
        const newCartCount = newCartItems.reduce(
            (total: number, cartItem: CartItemInterface) =>
                total + cartItem.quantity,
            0
        );

        const newCartTotal = newCartItems.reduce(
            (total: number, cartItem: CartItemInterface) =>
                total + cartItem.price * cartItem.quantity,
            0
        );

        dispatch(
            setCartItemsAction({
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal,
            })
        );
    };

    const addItemToCart = (item: ProductInterface) => {
        const newCartItems = addCartItem(cartItems, item);
        updateCartItemsReducer(newCartItems);
    };

    const removeItemFromCart = (itemToRemove: CartItemInterface) => {
        const newCartItems = removeCartItemFromCart(cartItems, itemToRemove);
        updateCartItemsReducer(newCartItems);
    };

    const incrementQuantity = (itemToUpdate: CartItemInterface) => {
        addItemToCart(itemToUpdate);
    };

    const decrementQuantity = (itemToUpdate: CartItemInterface) => {
        const newCartItems = decrementCartQuantity(cartItems, itemToUpdate);
        updateCartItemsReducer(newCartItems);
    };

    const value = {
        isCartOpen,
        cartItems,
        cartCount,
        cartTotal,
        addItemToCart,
        setIsCartOpen,
        removeItemFromCart,
        incrementQuantity,
        decrementQuantity,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

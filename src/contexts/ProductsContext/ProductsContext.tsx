import React, { FC, createContext, useState } from 'react';
import PRODUCTS from '../../shop-data.json';

export interface ProductInterface {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

type ContextState = {
    products: ProductInterface[];
    setProducts: React.SetStateAction<any>;
};
const contextDefaultValues: ContextState = {
    products: [],
    setProducts: () => null,
};

interface ProductsContextProps {
    children?: React.ReactNode;
}

export const ProductsContextContext =
    createContext<ContextState>(contextDefaultValues);

export const ProductsContextProvider: FC<ProductsContextProps> = ({
    children,
}: ProductsContextProps) => {
    const [products, setProducts] = useState<ProductInterface[]>(PRODUCTS);
    const value = {
        products,
        setProducts,
    };
    return (
        <ProductsContextContext.Provider value={value}>
            {children}
        </ProductsContextContext.Provider>
    );
};

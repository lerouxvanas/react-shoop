import React, { FC, createContext, useState, useEffect } from 'react';
import { SHOP_DATA } from '../../shop-data';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export interface ProductInterface {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

export interface CategoriesMapInterface {
    [key: string]: ProductInterface[];
}

type ContextState = {
    categoriesMap: CategoriesMapInterface;
    setCategoriesMap: React.SetStateAction<any>;
};
const contextDefaultValues: ContextState = {
    categoriesMap: {},
    setCategoriesMap: () => null,
};

interface CategoriesContextProps {
    children?: React.ReactNode;
}

export const CategoriesContextContext =
    createContext<ContextState>(contextDefaultValues);

export const CategoriesContextProvider: FC<CategoriesContextProps> = ({
    children,
}: CategoriesContextProps) => {
    const [categoriesMap, setCategoriesMap] = useState<CategoriesMapInterface>(
        {}
    );

    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };
        getCategories();
    }, []);

    const value = {
        categoriesMap,
        setCategoriesMap,
    };
    return (
        <CategoriesContextContext.Provider value={value}>
            {children}
        </CategoriesContextContext.Provider>
    );
};

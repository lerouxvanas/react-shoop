import { createContext, FC, useState, useEffect } from 'react';
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

interface UserInterface {
    uid: string;
    email: string;
    emailVerified: boolean;
    displayName: string;
    isAnonymous: boolean;
    photoURL: string;
    providerData: ProviderDatum[];
    stsTokenManager: StsTokenManager;
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
}

interface StsTokenManager {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
}

interface ProviderDatum {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    phoneNumber?: any;
    photoURL: string;
}

type ContextState = {
    currentUser: UserInterface | null;
    setCurrentUser: React.SetStateAction<any>;
};

const contextDefaultValues: ContextState = {
    currentUser: null,
    setCurrentUser: () => null,
};

export const UserContext = createContext<ContextState>(contextDefaultValues);

interface UserProviderProps {
    children?: React.ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({
    children,
}: UserProviderProps) => {
    const [currentUser, setCurrentUser] = useState<UserInterface | null>(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user: any) => {
            if (user) {
                const userDocRef = await createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

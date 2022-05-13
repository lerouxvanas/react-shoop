import React from 'react';
import { UserReducerActionTypes } from './UserActions';
export namespace UserInterface {
    export interface Account {
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

    export interface ReducerState {
        currentUser: Account | null;
    }

    export interface ReducerAction {
        type: UserReducerActionTypes;
        payload?: any;
    }

    export interface ContextState {
        currentUser: Account | null;
        setCurrentUser: (user: Account) => void;
    }
}

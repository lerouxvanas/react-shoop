import { createContext, FC, useEffect, useReducer } from 'react';
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from '../../utils/firebase/firebase.utils';

import { UserInterface } from './UserInterface.types';
import { UserReducerActionTypes } from './UserActions';

const contextDefaultValues: UserInterface.ContextState = {
    currentUser: null,
    setCurrentUser: () => null,
};

export const UserContext =
    createContext<UserInterface.ContextState>(contextDefaultValues);

const setUserAction = (
    payload: UserInterface.Account
): UserInterface.ReducerAction => {
    return {
        type: UserReducerActionTypes.SET_CURRENT_USER,
        payload,
    };
};

const userReducer = (
    state: UserInterface.ReducerState,
    action: UserInterface.ReducerAction
): UserInterface.ReducerState => {
    const { type, payload } = action;

    switch (type) {
        case UserReducerActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            throw new Error(`Unhandled type ${type}`);
    }
};

interface UserProviderProps {
    children?: React.ReactNode;
}

const INITIAL_USER_STATE: { currentUser: UserInterface.Account | null } = {
    currentUser: null,
};

export const UserProvider: FC<UserProviderProps> = ({
    children,
}: UserProviderProps) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_USER_STATE);
    const { currentUser } = state;

    const setCurrentUser = (user: UserInterface.Account) => {
        dispatch(setUserAction(user));
    };

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

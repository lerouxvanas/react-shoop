import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCVh6cTaD1Ur1BNgFMN4epO8GAgl_BtTrs',
    authDomain: 'react-shop-6b4e7.firebaseapp.com',
    projectId: 'react-shop-6b4e7',
    storageBucket: 'react-shop-6b4e7.appspot.com',
    messagingSenderId: '730264311203',
    appId: '1:730264311203:web:89c3e9b855b288103df616',
};

// Initialize Firebases
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
    collectionKey: string,
    objectsToAdd: any
) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object: any) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc: any, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};

export const createUserDocumentFromAuth = async (
    userAuth: any,
    additionalInformation?: any
) => {
    const userDocRef = doc(db, 'users', userAuth?.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (err) {
            console.log('err', err);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword: any = async (
    email: string,
    password: string
) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInEmailAndPassword: any = async (
    email: string,
    password: string
) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => {
    signOut(auth);
};

export const onAuthStateChangedListener = (callback: (state: any) => void) =>
    onAuthStateChanged(auth, {
        next: callback,
        error: () => {
            console.log('error');
        },
        complete: () => {
            console.log('complete');
        },
    });

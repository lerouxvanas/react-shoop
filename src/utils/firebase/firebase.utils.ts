import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

export const createUserDocumentFromAuth = async (userAuth: any) => {
    const userDocRef = doc(db, 'users', userAuth?.uid);
    console.log('userDocRef', userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log('userSnapshot', userSnapshot.exists());
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (err) {
            console.log('err', err);
        }
    }

    return userDocRef;
};
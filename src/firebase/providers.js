import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {
        // This function can be used to sign in with Google
        // It will return a promise that resolves with the user credentials
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        };


    } catch (error) {
        console.error("Error signing in with Google:", error);
        return {
            ok: false,
            errorMessage: error.message || 'An error occurred during Google sign-in.',
        };
    }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        // This function can be used to register a new user with email and password
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName,
        };

    } catch (error) {
        console.error("Error registering user:", error);
        return {
            ok: false,
            errorMessage: error.message || 'An error occurred during registration.',
        };
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        // This function can be used to log in a user with email and password
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName,
        };

    } catch (error) {
        console.error("Error logging in:", error);
        return {
            ok: false,
            errorMessage: error.message || 'An error occurred during login.',
        };
    }
}
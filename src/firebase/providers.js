import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {

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
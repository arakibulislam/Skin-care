import initFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // ========== Google login ============= //

    const loginWithGoogle = () => {
        setIsloading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsloading(false));
    }

    // ==========sing up===========//


    const handleRegistration = (name, email, password,  redirectLink) => {

        console.log(name, email, password);
        createUserWithEmailAndPassword(auth ,email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName(name);
                redirectLink();
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    // =========== log in ==============//

    const handleLogin = (username, password, redirectLink) => {
        console.log(username, password)



        signInWithEmailAndPassword(auth, username, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                redirectLink();
            })
            .catch(error => {
                setError(error.message);
            })

    }

    // ============== Log Out ===========//
    const logOut = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsloading(false));

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsloading(false)
        })
    }, [])

    return {
        user,
        error,
        loginWithGoogle,
        logOut,
        handleRegistration,
        handleLogin,
        isLoading
    }
}

export default useFirebase;
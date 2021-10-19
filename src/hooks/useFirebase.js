import initFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initFirebase();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // ========== Google login ============= //

    const loginWithGoogle = () => {
        setIsloading(true);
        return signInWithPopup(auth, googleProvider)
        .finally(()=> setIsloading(false));
    }

    // ==========sing up===========//
    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 8) {
            setError('Password Should be 8 charecthar');
            return;
        }
       return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    // =========== log in ==============//

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
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
            .finally(()=> setIsloading(false));

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else{
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
        handleEmail,
        handlePassword,
        handleName,
        handleLogin,
        isLoading
    }
}

export default useFirebase;
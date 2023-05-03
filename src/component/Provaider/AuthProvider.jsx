import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';



export const AuthContext = createContext(null)


const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [displayName, setName] = useState('')
    const [photoURL, setPhotoUrl] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState(null)
    const [loading,SetLoding] = useState(true)
   

    

    const logout = () => {
        SetLoding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            SetLoding(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const sinUpUser = (email, password) => {
        SetLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser = (email, password) => {
        SetLoding(true)
        return signInWithEmailAndPassword(auth, email, password)

    }



    const authInfo = {
        sinUpUser,
        setName,
        setPhotoUrl,
        displayName,
        user,
        photoURL,
        loginUser,
        error,
        logout,
        setUser,
        setError,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';



export const AuthContext = createContext(null)


const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    
    
    const [user, setUser] = useState({})
    const [loading,setLoding] = useState(true)
   
    const logout = () => {
        setLoding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            
            setUser(loggedUser)
            setLoding(false)
            
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const sinUpUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)

    }



    const authInfo = {
        sinUpUser,
        user,
        loginUser,
        logout,
        setUser,
        loading,
        auth

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';



export const AuthContext = createContext(null)


const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [displayName, setName] = useState('')
    const [photoURL, setPhotoUrl] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState(null)

    const logout = () =>{
     return   signOut(auth)
    }

    useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,loggedUser => {
            setUser(loggedUser)
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    const sinUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
            
    }

    const loginUser = (email, password) => {
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
        setUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
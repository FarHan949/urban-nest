import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebse/firebase';


export  const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser =(email, password) => {
         setLoading(true)
         return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
        })
        return ()=> unsubscribe()
    },[])

    const authInfo = {
        user,
        loading,
        login,
        logout,
        createUser,
    }

    return (
        <>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
            
        </>
    );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";

import auth from '../../firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const ContextProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const [loading,setLoading] = useState(true);

    //use creation
    const createUser = (email,password) => { 
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // user login

    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    
    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }

    // observer

    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false)

            console.log('observing current user inside useEffect', currentUser);
        })

        return ()=>{
            unSubscribe();
        };

    },[]);


   const authValues = {createUser,login,loading,user,logOut};
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider >
    );
};

export default ContextProvider;
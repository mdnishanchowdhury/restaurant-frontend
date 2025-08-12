import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);


    //create signIn
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //signin 
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logOut
    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //updated profile
    const updatedProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }
    //save user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current User', currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        userSignIn,
        createUser,
        updatedProfile,
        userLogOut,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider
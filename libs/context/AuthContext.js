"use client"

import { useEffect, useState, createContext, useContext } from "react"
import { onAuthStateChanged } from "firebase/auth"

import { useRouter } from "next/navigation"
import {doc, getDoc} from "firebase/firestore"
import { auth, db } from "../firebase-config"


const AuthContext = createContext()

export  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const userDocRef = doc(db, "users", currentUser.uid)
                const userDocSnap = await getDoc(userDocRef)

                if (userDocSnap.exists()) {
                    setUser({
                        uid: currentUser.uid,
                        email: currentUser.email,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                        userRole: userDocSnap.data().userRole || null
                    })
                } else {
                    setUser({
                        uid: currentUser.uid,
                        email: currentUser.email,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                        userRole: null
                    })
                }
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    )


}

export const useAuth = () => {
    return useContext(AuthContext)
}
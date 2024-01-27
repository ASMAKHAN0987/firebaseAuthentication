import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../config/firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const userContext = createContext()

export const ContextProvider=({children})=>{
    const [user,setUser] = useState("")
    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut(){
       return  signOut(auth)
    }
    function signInWithGoogle (){
       const googleAuthProvider = new GoogleAuthProvider()
       return signInWithPopup(auth,googleAuthProvider)
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    return(
    <userContext.Provider value={{signUp,user,logIn,logOut,signInWithGoogle}}>
          {children}
    </userContext.Provider>)
}
export  function useUserAuth(){
    return useContext(userContext)
}
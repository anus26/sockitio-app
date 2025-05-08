import React, { createContext, useContext, useState } from 'react'
export const AuthContext=createContext()
import Cookies from 'js-cookie'; 
export const AuthProvider = ({children}) => {
    const initialuserstate=Cookies.get("jwt") || localStorage.getItem("chatapp")

    const [authUser, setAuthUser]=useState(initialuserstate ? JSON.parse(initialuserstate):undefined)
  return (
   <AuthContext.Provider value={[authUser,setAuthUser]}>
    {children}

   </AuthContext.Provider>
  )
}

export const  useAuth=()=> useContext(AuthContext)
import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
const raw =  localStorage.getItem("chatapp");
let parsed = undefined;

try {
  parsed = raw ? JSON.parse(raw) : undefined;
} catch (e) {
  console.error("Failed to parse auth user data:", e);
}

const [authUser, setAuthUser] = useState(parsed);


  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const localUser = localStorage.getItem("chatapp")

  let parsedUser = undefined
  try {
    if (localUser) {
      parsedUser = JSON.parse(localUser)
    }
  } catch (err) {
    console.error("❌ Failed to parse localStorage chatapp:", err)
  }

  const [authUser, setAuthUser] = useState(parsedUser)

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

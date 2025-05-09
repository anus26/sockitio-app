import React from 'react'
import Left from './Home/Left/left'
import Right from './Home/right/right'
import Singnup from './Components/singnup'
import Login from './Components/Login'
import { useAuth } from './context/AuthProvider'
import { Navigate, Route, Routes } from 'react-router-dom'


const App = () => {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  
  return (
    <>
   <Routes>
    <Route path='/' element={
      authUser?  <div className='flex h-screen  main'>
      <Left/>
    <Right/>
    </div>  :  (<Navigate to={"/login"}/>)
    }/>

    <Route path='/login' element={ authUser? <Navigate to={"/"}/>: <Login/>}/>
    <Route path='/singnup' element={ authUser? <Navigate to={"/login"}/>: <Singnup/>}/>

   </Routes>

 
    </>

  )
}

export default App
import React from 'react'
import Left from './Home/Left/left'
import Right from './Home/right/right'
import Singnup from './Components/singnup'
import Login from './Components/Login'
import { useAuth } from './context/AuthProvider'


const App = () => {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  
  return (
    <>
 <div className='flex h-screen  main'>
  <Left/>
<Right/>
</div>  

 
  
  <Singnup/>
   <Login/>
 
    </>

  )
}

export default App
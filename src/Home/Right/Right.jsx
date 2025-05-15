import React, { useEffect } from 'react'
import Chatuser from './Chatuser.jsx'

import Message from './Message.jsx'; // correct
 // ✅ import named export
import Typesend from './Typesend.jsx'
import useChat from '../../zustand/useChat.js';
import Loading from '../../Components/Loading.jsx';
import { useAuth } from '../../context/AuthProvider.jsx';




const Right = () => {
 const {selectedChat,setSelectedChat}=useChat()
useEffect(()=>{
  return setSelectedChat(null)
},[setSelectedChat])
  
  return (
<>
<div className='text-gray-300 bg-blue-900 w-[70%] '>
{!selectedChat?(<Nochat/>):(<>
     <Chatuser/>
     <div className=' overflow-y-auto ' style={{maxHeight:"calc(96vh - 15vh)"}}>

     <Message/>
     </div>
     <Typesend/>
</>)}
</div>
</>
  )
}

export default Right

const Nochat=()=>{
  const [authUser]=useAuth()
  console.log(authUser);
  
  return(
    <>

    <div className='flex h-screen items-center justify-center'>
      <h1 className='text-center '>Welcome <span className='text-bold'>{authUser.user ? (
  <p>{authUser.user.fullname}</p>
) : (
  <p>Select a user to start chatting</p>
)}</span>

      <br />
      No chat selected
      </h1>
    </div>
    </>
  )
}
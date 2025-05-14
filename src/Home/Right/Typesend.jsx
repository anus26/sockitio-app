import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';
const Typesend = () => {
const [message,setMessage]=useState("")
const {loading,sendMessages}=useSendMessage()

const handlesubmit=async(e)=>{
  e.preventDefault()
  await sendMessages(message )
  setMessage("")
}

  return (
    <form onSubmit={handlesubmit}>


    <div className='flex space-x-2 h-[10vh] text-center  bg-slate-700'>
        <div className='w-[50%] px-4 py-2 text-black'>
        <input
      
  type="text"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Type here"
  className="input w-full rounded-[10px]"
/>
        </div>
        <div className='py-2'>

            <button><IoSend  className='text-5xl px-2 hover:bg-gray-600 rounded-full duration-300'/></button>
        </div>
    </div>
    </form>
  )
}

export default Typesend
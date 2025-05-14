import React from 'react'
import useChat from '../../zustand/useChat.js'

const Chatuser = () => {
  const {selectedChat}=useChat()
  console.log("Selected Chat: ", selectedChat);
  
  return (
    <div className='bg-gray-800 hover:bg-gray-700   duration-300 flex items-center justify-center space-x-3 gap-3 h-[10vh]'>
        <div className="avatar">
  <div className="mask mask-squircle w-14" >
    <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
  </div>
  <div className='flex-wrap'>
    <h2 className='text-2xl'></h2>
    <span>online</span>
  </div>
</div>
    </div>
  )
}

export default Chatuser
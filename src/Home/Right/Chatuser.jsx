import React from 'react';
import useChat from '../../zustand/useChat.js';
import { useSocketcontext } from '../../context/SocketContext.jsx';


const Chatuser = () => {
  const { selectedChat } = useChat();
  const { onlineUsers } = useSocketcontext();

   const isOnline = selectedChat
    ? onlineUsers.includes(selectedChat.id ?? selectedChat._id)
    : false;

  return (
    <div className='bg-gray-800 hover:bg-gray-700 duration-300 flex items-center space-x-3 p-4 h-[10vh]'>
      <div className="avatar">
        <div className="mask mask-squircle w-14">
          <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
        </div>
      </div>

      <div className='flex-1'>
        <h2 className='text-2xl flex items-center space-x-2'>
          {selectedChat 
            ? selectedChat.fullname 
            : 'Select a user to start chatting'}
          {selectedChat && (
            <span
              className={`inline-block h-3 w-3 rounded-full ${
                isOnline ? 'bg-green-400' : ''
              }`}
              title={isOnline ? 'Online' : 'Offline'}
            ></span>
          )}
        </h2>
        {selectedChat && (
          <p className='text-sm text-gray-400'>
            {isOnline ? 'Online now' : 'Offline'}
          </p>
        )}
      </div>
    </div>
  );
};

export default Chatuser;

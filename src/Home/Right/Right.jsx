import React, { useEffect } from 'react';
import Chatuser from './Chatuser.jsx';
import Message from './Message.jsx';
import Typesend from './Typesend.jsx';
import useChat from '../../zustand/useChat.js';
import { useAuth } from '../../context/AuthProvider.jsx';
const Right = () => {
  const { selectedChat, setSelectedChat } = useChat();

  useEffect(() => {
    return () => setSelectedChat(null);
  }, [setSelectedChat]);

  return (
    // <div className="bg-blue-900  w-[70%] text-gray-300 flex flex-col h-screen md:hidden sm:hidden lg:block xl:block  ">
<div className={`lg-block ${selectedChat ? "block":"hidden"} w-full  bg-blue-900 text-gray-300 flex flex-col lg:w-[70%]`}>
      {!selectedChat ? <NoChat /> : (
        <>
          <Chatuser />

          <div className="flex-1 overflow-y-auto px-4" style={{ maxHeight: 'calc(100vh - 14vh)' }}>
            <Message />
          </div>
          <div className="border-t border-blue-800">
            <Typesend />
          </div>
        </>
      )}
    </div>
  );
};

export default Right;

const NoChat = () => {
  const [authUser] = useAuth();

  return (
    <div className="flex items-center justify-center h-full text-center px-4  md:hidden sm:hidden lg:block xl:block">
      <div className=''>
        <h1 className="text-2xl font-semibold mb-2">
          Welcome, <span className="text-white font-bold">{authUser?.user?.fullname || "Guest"}</span>
        </h1>
        <p className="text-lg">Please select a user to start chatting.</p>
      </div>
    </div>
  );
};

import React from 'react';
import Search from './Search';
import User from './User';
import Logout from './Logout';

import useChat from '../../zustand/useChat';

const Left = () => {
const {selectedChat}=useChat()
  
  return (
    <div className="bg-black lg:w-[30%] text-gray-300 flex flex-col h-screen  w-full ">
{/* <div className={`lg:block ${selectedChat ? "hidden" : "block"} bg-black w-full lg:w-[30%]`}> */}

      
      <div className="p-4 border-b border-gray-700">
        <Search />
      </div>
      <div className="flex-1 overflow-y-auto px-2 py-1 ">
        <User />
      </div>
      <div className="p-4 border-t border-gray-700">
        <Logout />
    </div>
      </div>

  );
};

export default Left;

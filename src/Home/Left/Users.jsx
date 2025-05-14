import React from 'react';
import useChat from '../../zustand/useChat.js';

const Users = ({ user }) => {
  const {  selectedChat, setSelectedChat } = useChat();
  const isSelected =  selectedChat?._id === user._id;


  return (
    <div
      className={`hover:bg-slate-600 duration-300 p-3 rounded cursor-pointer ${
        isSelected ? 'bg-slate-600' : ''
      }`}
      onClick={() =>setSelectedChat(user)}
    >
      <div className="flex items-center space-x-4">
        <div className="avatar online placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-xl">AI</span>
          </div>
        </div>
        <div>
          <h2 className="font-bold">{user.fullname}</h2>
          <span className="text-sm text-gray-300">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Users;

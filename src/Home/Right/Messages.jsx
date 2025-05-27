import React from 'react';

const  Messages = ({ message })  =>{

  if (!message) return null;

  const authUser = JSON.parse(localStorage.getItem("chatapp"));
  const itsMe = message.senderId === authUser.user._id 



  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "bg-green-500";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="p-2 sm:p-4 text-white box-border">
      <div className={`chat ${chatName}`}>
        <div className={`chat-bubble text-white ${chatColor} max-w-xs break-words px-4 py-2 rounded-2xl`}>
          {message.message}
        </div>
        <div className="chat-footer text-xs text-gray-200 mt-1">{formattedTime}</div>
      </div>
    </div>
  );
};

export default Messages;

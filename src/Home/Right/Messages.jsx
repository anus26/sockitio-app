import React from 'react'



const Messages = ({ message }) => {
  if (!message) return null; // If message is undefined, don’t render
console.log(message);

  // const authUser = JSON.parse(localStorage.getItem("chatapp"));
  // const itsMe = message.senderId === authUser?.user?._id;
  // const chatName = itsMe ? "chat-end" : "chat-start";
  // const chatColor = itsMe ? "bg-blue-500" : "";

  // const createdAt = new Date(message.createdAt);
  // const formattedTime = createdAt.toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });

  return (
    <div className="p-4 text-white box-border">
      {/* <div className={`chat ${chatName}`}> */}
        {/* <div className={`chat-bubble text-white ${chatColor}`}> */}
        <div className='text-black bg-white'>

          {message.message}
        </div>
        {/* </div> */}
        {/* <div className="chat-footer">{formattedTime}</div> */}
      </div>
    // </div>
  );
};


export default Messages;

import React, { useEffect, useRef } from "react";
import Messages from "./Messages.jsx"; // This is the single message component
import Loading from "../../Components/Loading.jsx";
import useGetMessages from "../../context/useGetMessages.js";
import useGetMessage from "../../context/useGetMessage.js";

const Message=()=> {
  const { loading, messages } = useGetMessages();
  useGetMessage()// incomgin messages

  console.log(messages);


  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : messages.length > 0 ? (
        messages.map((message, index) => (
          <div
            key={message._id}
    
          >
            <Messages message={message} />
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-center mt-[20%] text-white">
            Say! Hi to start the conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Message;

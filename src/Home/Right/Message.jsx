import React, { useEffect, useRef } from "react";
import Messages from "./Messages";
import useGetMessage from "../../context/useGetMessage.js";

import useGetMessages from "../../context/useGetMessages.js";
import Loading from "../../components/Loading.jsx";
function Message() {
  const { loading, messages } = useGetMessages();
  useGetMessage(); // listing incoming messages
  console.log(messages)

  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);
  return (
    <div
      className="flex-1 overflow-y-auto    "
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
         {loading ? (
        <Loading/>
      ) : (
        messages.length > 0 &&
        messages.map((message) => (
          <div ref={lastMsgRef} key={message._id}>
            <Messages  message={message} />
          </div>
        ))
      )}

      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[20%]">
            Say! Hi to start the conversation
          </p>
        </div>
      )}  


{/* {messages.map((message,person) => (
          <div  key={person._id}>
            <Messages  message={message}/>
          </div>
        ))} */}




    </div>
  );
}

export default Message;
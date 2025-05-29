import React, { useState } from 'react'
import useChat from '../zustand/useChat.js';
import Cookies from 'js-cookie';
import axios from 'axios';
const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages,selectedChat,setMessage,newMessage}=useChat()
    const sendMessages = async (message) => {

       
          setLoading(true);
          const token = Cookies.get("jwt");
      
  
          try {
            const response = await axios.post(
              `https://grand-frankie-anusraza123bm-df134fa3.koyeb.app/message/send/${selectedChat._id}`,
              {message},
              {
                  
                  headers: {
                      Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
              }
            )
            console.log("📥 Messages from backend:", response.data,message)
           
      setMessage([...messages, response.data]);
          } catch (error) {
            console.error("❌ Failed to send messages:", error);
          } finally {
            setLoading(false);
          }
        }
   
  return {loading,sendMessages}
}

export default useSendMessage
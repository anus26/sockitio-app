import { useEffect, useState } from 'react';
import axios from 'axios';
import useChat from '../zustand/useChat.js';
import Cookies from 'js-cookie';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const {selectedChat,setMessage,messages}= useChat();

  useEffect(() => {
    const getMessages = async () => {
      if (selectedChat && selectedChat._id) {
        setLoading(true);
        const token = Cookies.get("jwt");
        console.log("TOKEN:", token);

        try {
          const response = await axios.get(
            `http://localhost:3000/message/get/${selectedChat._id}`,
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Selected Chat: ", selectedChat);
        
          
          console.log("📥 Messages from backend:", response.data.messages)
           
          setMessage(response.data.messages);
        } catch (error) {
          console.error("❌ Failed to fetch messages:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    getMessages();
  }, [selectedChat, setMessage,]);
  return { loading, messages };
};

export default useGetMessages;

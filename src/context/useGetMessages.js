import { useEffect, useState } from 'react';
import axios from 'axios';
import useConversation from '../zustand/useConversation.js';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return;
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:3000/Message/get/${selectedConversation._id}`);
        setMessages(res.data);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation, setMessages]);

  return [loading, messages];
};

export default useGetMessages;

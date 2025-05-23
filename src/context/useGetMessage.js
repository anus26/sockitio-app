import { useEffect } from 'react';
import sound from '../assets/Frontend_src_assets_notification.mp3';
import useChat from '../zustand/useChat.js';
import { useSocketcontext } from './SocketContext.jsx';

const useGetMessage = () => {
  const { socket } = useSocketcontext();
  const { messages, setMessage } = useChat();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      
      new Audio(sound).play();
      setMessage([...messages, newMessage]);
      console.log( "newmessage");
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessage]);
};

export default useGetMessage;

// play the notification



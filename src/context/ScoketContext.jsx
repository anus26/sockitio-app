import { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { io } from "socket.io-client";

// 1. Create the context
export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [authUser] = useAuth();

  // 2. Connect to socket server when user is authenticated
  useEffect(() => {
    if (authUser) {
      const newSocket = io("http://localhost:3000", {
        query: {
          userId: authUser.user._id,
        },
      });

      setSocket(newSocket);

      // Optional: clean up on unmount
      return () => {
        newSocket.disconnect();
      };
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;


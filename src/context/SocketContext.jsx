import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { io } from "socket.io-client";


//it is use hook

export const useSocketcontext=(()=>{
  return useContext(SocketContext)
})
// 1. Create the context
export const SocketContext = createContext();

const SocketProvider = (   {children}) => {
  const [socket, setSocket] = useState(null);
  const [authUser] = useAuth();
  const [onlineUsers,setOlineUsers]=useState([])
  // 2. Connect to socket server when user is authenticated
  useEffect(() => {
    if (authUser?.user?.id) {
      const newSocket = io("http://localhost:3000", {
        query: {
          userId: authUser.user._id,
        },
      });

      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users) => {
        setOlineUsers(users);
      });

      return () => {
        newSocket.disconnect();
      };
    } else {
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;


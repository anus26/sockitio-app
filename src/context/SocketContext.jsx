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
  const [onlineUsers,setOnlineUsers]=useState([])
  // 2. Connect to socket server when user is authenticated
  useEffect(() => {
    console.log("🧠 AuthUser at socket init:", authUser);
  
    if (authUser?.user?._id) {
      const socket = io(
        "https://grand-frankie-anusraza123bm-df134fa3.koyeb.app"
                //  'http://localhost:3000'
        , {
        auth: {
          userId: authUser.user._id 
        },
        withCredentials: true,
        
      });
  
      setSocket(socket);
  
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
        console.log("🟢 Online Users:", users);
        console.log("🟢 Socket ID:", socket.id);
      });
  
      return () => {
        socket.disconnect();
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




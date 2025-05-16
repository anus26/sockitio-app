import React, { useEffect } from 'react'

import useChat from '../zustand/useChat.js'
import { useSocketcontext } from './SocketContext.jsx'

const useGetMessage = () => {

    const {socket}=useSocketcontext()
    const {  messages,setMessage}=useChat()
    useEffect(()=>{
        socket.on("newMessage",(newMessage)=>{
            setMessage([...messages,newMessage])
        })
        return ()=>{
            socket.off("newMessasge")
        }
    },[socket,messages,setMessage])


}

export default useGetMessage


import React from 'react'
import Messages from './Messages'
import useGetMessages from '../../context/useGetMessages.js'
const Message = () => {
  const [loading,message]=useGetMessages()
  console.log(message);
  return (
    <div className=' overflow-y-auto' style={{minHeight:"calc(92vh - 8vh)"}}>
<Messages/>
<Messages/>
<Messages/>
<Messages/>
<Messages/>
<Messages/>
<Messages/>
<Messages/>
<Messages/>
<Messages/>
    </div>
  )
}

export default Message
import React from 'react'
import Chatuser from './Chatuser.jsx'

import Message from './Message.jsx'; // correct
 // ✅ import named export
import Typesend from './Typesend.jsx'




const Right = () => {
 
  
  return (
<>
<div className='text-gray-300 bg-blue-900 w-[70%] '>
     <Chatuser/>
     <div className=' overflow-y-auto ' style={{maxHeight:"calc(96vh - 15vh)"}}>

     <Message/>
     </div>
     <Typesend/>
</div>
</>
  )
}

export default Right
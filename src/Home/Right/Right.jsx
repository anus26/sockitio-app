import React from 'react'
import Chatuser from './Chatuser'
import Message from './Message'
import Typesend from './Typesend'


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
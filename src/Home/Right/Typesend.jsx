import React from 'react'
import { IoSend } from "react-icons/io5";
const Typesend = () => {
  return (
    <div className='flex space-x-2 h-[10vh] text-center bg-slate-700'>
        <div className='w-[50%] px-4 py-2'>
            <input type="text" placeholder="Type here" className="input w-full rounded-[10px]"  />
        </div>
        <div className='py-2'>

            <button><IoSend  className='text-5xl px-2 hover:bg-gray-600 rounded-full duration-300'/></button>
        </div>
    </div>
  )
}

export default Typesend
import React from 'react'

const Chatuser = () => {
  return (
    <div className='bg-gray-800 hover:bg-gray-700   duration-300 flex items-center justify-center space-x-3 gap-3 h-[10vh]'>
        <div className="avatar">
  <div className="mask mask-squircle w-14" >
    <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
  </div>
  <div className='flex-wrap'>
    <h2 className='text-2xl'>Raza</h2>
    <span>online</span>
  </div>
</div>
    </div>
  )
}

export default Chatuser
import React from 'react'
import Search from './search'
import User from './User'
import Logout from './Logout'



const Left = () => {
  return (
<>
<div className='text-gray-300 bg-black w-[30%]'>
   <Search/>
   <div className='flex-1 overflow-y-auto' style={{minHeight:"calc(84vh -10vh)"}}><User/></div>
   <Logout/>
</div>
</>
  )
}

export default Left
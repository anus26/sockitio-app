import React from 'react'
import Search from './search'
import User from './User'
import Logout from './Logout'

const Left = () => {
  return (
<>
<div className='text-gray-300 bg-black w-[30%]'>
   <Search/>
   <User/>
   <Logout/>
</div>
</>
  )
}

export default Left
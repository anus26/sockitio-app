import React from 'react'

const Users = ({user}) => {
  return (
  <>
    <div className="flex items-center gap-4  space-x-4 mt-4 px-4 py-2 hover:bg-slate-800 duration-300 cursor-pointer">
        <div className="avatar online placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-12">
            <span className="text-xl">AI</span>
          </div>
          <div>
          </div>
        </div>
        <div className='flex-wrap'>

            <h2  className='font-[700]'>{user.fullname}</h2>
            <span>{user.email}</span>
        </div>
      </div>
  </>
  )
}

export default Users
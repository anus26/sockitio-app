import React from 'react'

const Users = () => {
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

            <h2  className='font-[700]'>Raza</h2>
            <span>anusraza234@gmail.com</span>
        </div>
      </div>
  </>
  )
}

export default Users